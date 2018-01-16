# subnet-discover

*subnet-discover* is a `nodejs` class that allows you to discover of specific devices in your local network. It's just an extension of a [ping-subnet](https://www.npmjs.com/package/ping-subnet) package. It has the same API with a small addition. At this moment it supports the only printers.

# Installation

```sh
npm install subnet-discover
```

# Usage

### You can specify the custom ranges parameter

Ranges parameter is represented by array of strings. There are two possible forms: just a single IP or the range.

```javascript
const SubnetDiscoverer = require('subnet-discover');

const ranges = [
  '192.168.0.123',
  '192.168.0.1-192.168.0.100'
];

const subnetDiscoverer = new SubnetDiscoverer(ranges);

subnetDiscoverer.on('host:printer', (ip, deviceName) => {
  console.log('printer', ip, deviceName);
});

subnetDiscoverer.discover();
```

### If the custom ranges is not specified it would be assigned using current network settings

```javascript
const SubnetDiscoverer = require('subnet-discover');

const subnetDiscoverer = new SubnetDiscoverer();

subnetDiscoverer.on('host:printer', (ip, deviceName) => {
  console.log('printer', ip, deviceName);
});

subnetDiscoverer.discover();
```

# Events list

| Name       | Args     | Description |
|------------|----------|-------------|
|`host:alive`| IP-address of a live host | Fired when the ping of any host is succesful |
|`ping:end`  | empty    | Fired when the ping of all IPs in ranges is completed |
|`host:printer`| IP-address and the model of the printer | Fired when printer is detected |
