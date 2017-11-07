const SubnetDiscoverer = require('./');

const subnetDiscovere = new SubnetDiscoverer();

subnetDiscovere.on('host:printer', (ip, deviceName) => {
  console.log('printer', ip, deviceName);
});
subnetDiscovere.discover();