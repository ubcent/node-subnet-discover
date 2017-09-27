const SubnetsPinger = require('ping-subnet');
const snmp = require('net-snmp');

class SubnetDiscoverer extends SubnetsPinger {
  constructor() {
    super();
  }

  discover() {
    this.ping();

    this.on('host:alive', ip => {
      const session = snmp.createSession(ip, 'public');
      const oids = [
        '1.3.6.1.2.1.25.3.2.1.2.1',
        '1.3.6.1.2.1.43.11.1.1.6.1.1',
        '1.3.6.1.2.1.25.3.2.1.3.1'
      ];
      let varBinds = [];

      session.get(oids, (error, varbinds) => {
        if (!error && varbinds.length == oids.length && varbinds[0].value == '1.3.6.1.2.1.25.3.1.5') {
          this.emit('host:printer', ip, varbinds[2].value.toString());
          let vBinds = [];
          
          session.walk('1.3.6.1', 20, varbinds => {
            vBinds = vBinds.concat(varbinds);
          }, error => {
            if (!error) {
              this.emit('host:snmp', ip, vBinds);
            }
          });
        }
      });
    });
  }
}

module.exports = SubnetDiscoverer;