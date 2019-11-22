#!/bin/bash
# Expected arguments: deploy_ipfs.sh <pinner service> <web3 connection string>
ipfs-deploy build -p $1 -C -O \
| ens-updater setContenthash blocktimer.dappstar.eth \
--web3 $2 \
--contenttype ipfs-ns \
--contenthash stdin
