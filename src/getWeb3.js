import Web3 from 'web3'
/*
 Obtain web3 instance. Based on code from
 https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
 */
let getWeb3 = new Promise(function (resolve, reject) {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener('load', async () => {
        if (window.ethereum) {
            console.log('Injected web3 detected.')
            const web3 = new Web3(window.ethereum)
            resolve(web3)
        } else {
            reject("No web3 detected.")
        }
    })
})

export default getWeb3
