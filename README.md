# Multichain Web3 Domains

Nodejs SDK

Npm: https://www.npmjs.com/package/domainchainjs

Github: https://github.com/DomainChainHQ/domainchainjs

Before installing the package you need to check and be sure to install the packages below:

```
npm install web3 
```

Install Package

```
npm install domainchainjs
```

Call 
```
const domainchainjs = require('domainchainjs');
```

Install:

Chain Supported: elastos, fusion, iotex, fuse etc

```
const custom = 
{
		rpcUrl: "https://mainnet.fusionnetwork.io/",
		contractAddress: "0xa1019535e6b364523949eaf45f4b17521c1cb074",
		
}

//const sdk = domainchainjs.SDK('custom', custom);
	
const sdk = domainjs.SDK('fusion');
```

```
// your domains
const _domain = "fusion.fsn";
	
// resolve domain to get the address of the owner.
const owner = await sdk.getOwner(_domain);

console.log(owner);

// your address
const _address = "xxx";

// get a domain default from a user's address, requiring the user to set the default domain name initially.
const domain = await sdk.getDomain(_address);

console.log(domain);
```
Pls update test.js for specific instructions

Thanks!



