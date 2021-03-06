[![Build Status](https://travis-ci.com/TripleSpeeder/blocktimer.svg?branch=master)](https://travis-ci.com/TripleSpeeder/blocktimer)

### Access options:

#### IPFS + ENS
http://blocktimer.dappstar.eth/

This is the recommended method if your system supports .eth name resolution. The ENS name 
```blocktimer.dappstar.eth``` is set up to point to the ipfs CID. The content hash
can be updated in the ENS system, so using this domain will always point to the latest release.

#### IPFS + ENS + EthDNS
http://blocktimer.dappstar.eth.link/

If your system/browser does not have direct support for .eth domains you can use the ethDNS
system by simply adding ```.link``` to the ENS domain. The nameserver responsible for .link
domains will automatically look up the according content hash entry and return a gateway.ipfs.io
link to the correct address.  

#### IPFS
If your browser supports the ipfs protocol: ipfs://QmXHWfbbU3A3HrSuEM9HFS842Vi6r3FmkXgwv4TzgnjPR1/

Via ipfs gateway: https://gateway.ipfs.io/ipfs/QmXHWfbbU3A3HrSuEM9HFS842Vi6r3FmkXgwv4TzgnjPR1/

Note the CID ```QmXHWfbbU3A3HrSuEM9HFS842Vi6r3FmkXgwv4TzgnjPR1``` targets one specific
release and will be outdated as soon as a new build of the site is published, so this method is not recommended

#### IPFS + IPNS
Not set up yet!

#### HTTP(S)
https://triplespeeder.github.io/blocktimer/

This is a regular link to site hosted on github pages.

