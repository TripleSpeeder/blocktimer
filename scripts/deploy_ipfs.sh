#!/bin/bash
# Expected arguments: deploy_ipfs.sh <pinner service> <web3 connection string>
ipfs-deploy build -p $1 -C -O | ens-updater setContenthash blocktimer.dappstar.eth ipfs-ns stdin -v --web3 $2
