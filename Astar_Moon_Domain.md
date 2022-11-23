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

Chain Supported: astar, moonbeam, moonriver

```
// for astar domains astr.domains
const astar = 
{
		rpcUrl: "https://rpc.astar.network:8545",
		contractAddress: "0xA1019535E6b364523949EaF45F4B17521c1cb074",
		
}

// for moonid moons.money
const moonbeam = 
{
	"rpcUrl": "https://rpc.api.moonbeam.network/",
	"contractAddress": "0x819B997a2f711eC1Ee998cB2DF5a6B2c4be1B575"		
}

const moonriver = 
{
	"rpcUrl": "https://rpc.api.moonriver.moonbeam.network",
	"contractAddress": "0xa1019535e6b364523949eaf45f4b17521c1cb074"
}

//

const sdk = domainchainjs.SDK('custom', astar);
//const sdk = domainchainjs.SDK('custom', moonbeam); 
//const sdk = domainchainjs.SDK('custom', moonriver); 

```

```
// your domains
const _domain = "astardomains.astr";
//const _domain = "moonbeam.moon"; // moonbeam.glmr // bobabeam.boba
//const _domain = "moonriver.movr";
	
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



