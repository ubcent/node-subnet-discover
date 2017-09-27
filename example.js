const SubnetDiscoverer = require('./');

const subnetDiscovere = new SubnetDiscoverer();

subnetDiscovere.on('host:printer', (ip, deviceName) => {
  console.log('printer', ip, deviceName);
});

subnetDiscovere.on('host:snmp', (ip, tree) => {
  console.log('printer', ip, tree);
});
subnetDiscovere.discover();