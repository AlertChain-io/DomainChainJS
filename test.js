const domainchainjs = require('domainchainjs');

callFusion();

async function callElastos(){
	
	// install
	const sdk = domainchainjs.SDK('Elastos');

	// change your domains
	const _domain = "elastos.ela";
	
	// change your address
	const _address = "0x5aEa3F3f358347Abf94B554389174F966faeEfbB";
	
	// resolve domain to get the address of the owner. metadata: true // false default return metadata along with domain information
	const owner = await sdk.getOwner(_domain, false);

	console.log(owner);


	// get total domains
	const balance = await sdk.balanceOf(_address);

	console.log(balance);

	// get a domain default from a user's address, requiring the user to set the default domain name initially.
	const domain = await sdk.getDomain(_address);

	console.log(domain);
	
	// gets all the domains owned by an wallet address.
	const domains = await sdk.getDomains(_address);

	console.log(domains);

}

async function callFusion(){
	
	// install
	const sdk = domainchainjs.SDK('Fusion');

	// change your domains
	const _domain = "fusion.fsn";
	
	// change your address
	const _address = "0x5aEa3F3f358347Abf94B554389174F966faeEfbB";
	
	// resolve domain to get the address of the owner. metadata: true // false default return metadata along with domain information
	const owner = await sdk.getOwner(_domain, false);

	console.log(owner);


	// get total domains
	const balance = await sdk.balanceOf(_address);

	console.log(balance);

	// get a domain default from a user's address, requiring the user to set the default domain name initially.
	const domain = await sdk.getDomain(_address);

	console.log(domain);
	
	// gets all the domains owned by an wallet address.
	const domains = await sdk.getDomains(_address);

	console.log(domains);
	
}

async function callIoTeX(){
	
	// install
	const sdk = domainchainjs.SDK('iotex');

	// your domains
	const _domain = "iotexdomains.iotx";
	
	// resolve .iotx domain to get the address of the owner. metadata: true // false default return metadata along with domain information
	const owner = await sdk.getOwner(_domain, true);

	console.log(owner);
	
	console.log(iotex.from(owner.owner).string());

	// your domains
	const _address = "0xbb48801EAF9947db8b49a96DEA231C5893125B9c";
	
	// get total domains
	const balance = await sdk.balanceOf(_address);

	console.log(balance);

	// get a domain default from a user's address, requiring the user to set the default domain name initially.
	const domain = await sdk.getDomain(_address);

	console.log(domain);
	
	// gets all the domains owned by an wallet address.
	const domains = await sdk.getDomains(_address);

	console.log(domains);
	
}


async function callFuse(){
	
	// install
	const sdk = domainchainjs.SDK('fuse');

	// change your domains
	const _domain = "vitalikbuterin.fuse";
	
	// change your address
	const _address = "0xB6eD4736BC98b49D2f357f35Aeb1Ac254E544A62";
	
	// resolve domain to get the address of the owner. metadata: true // false default return metadata along with domain information
	const owner = await sdk.getOwner(_domain, false);

	console.log(owner);


	// get total domains
	const balance = await sdk.balanceOf(_address);

	console.log(balance);

	// get a domain default from a user's address, requiring the user to set the default domain name initially.
	const domain = await sdk.getDomain(_address);

	console.log(domain);
	
	// gets all the domains owned by an wallet address.
	const domains = await sdk.getDomains(_address);

	console.log(domains);
	
}

async function callMoonbeam(){
	
	// install
	const sdk = domainchainjs.SDK('moonbeam');

	// change your domains
	const _domain = "earn.glmr";
	
	// change your address
	const _address = "0xb2015cf19b82bc722b8050c27e80ff0c8266524f";
	
	// resolve domain to get the address of the owner. metadata: true // false default return metadata along with domain information
	const owner = await sdk.getOwner(_domain, false);

	console.log(owner);


	// get total domains
	const balance = await sdk.balanceOf(_address);

	console.log(balance);

	// get a domain default from a user's address, requiring the user to set the default domain name initially.
	const domain = await sdk.getDomain(_address);

	console.log(domain);
	
	// gets all the domains owned by an wallet address.
	const domains = await sdk.getDomains(_address);

	console.log(domains);
	
}

async function callCustom(){
	
	const custom = 
	{
		rpcUrl: "https://rpc.bittorrentchain.io",
		contractAddress: "0xa1019535e6b364523949eaf45f4b17521c1cb074",
		
	}
	// install
	const sdk = domainchainjs.SDK('custom', custom);

	// change your domains
	const _domain = "bittorrent.btt";
	
	// change your address
	const _address = "0xbb48801EAF9947db8b49a96DEA231C5893125B9c";
	
	// resolve domain to get the address of the owner. metadata: true // false default return metadata along with domain information
	const owner = await sdk.getOwner(_domain, false);

	console.log(owner);

	// get total domains
	const balance = await sdk.balanceOf(_address);

	console.log(balance.toString());

	// get a domain default from a user's address, requiring the user to set the default domain name initially.
	const domain = await sdk.getDomain(_address);

	console.log(domain);
	
	// gets all the domains owned by an wallet address.
	const domains = await sdk.getDomains(_address);

	console.log(domains);
	
}