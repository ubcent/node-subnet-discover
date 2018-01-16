const SubnetDiscoverer = require('./');

const subnetDiscoverer = new SubnetDiscoverer();

subnetDiscoverer.on('host:printer', (ip, deviceName) => {
  console.log('printer', ip, deviceName);
});
subnetDiscoverer.discover();