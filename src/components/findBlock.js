// Estimate number of blocks created during timeDelta
function getBlockDelta(deltaSeconds) {
    const averageSecondsPerBlock = 15
    return Math.round(deltaSeconds/averageSecondsPerBlock)
}

export async function findBlock(web3, startBlockNumber, targetTimestamp, threshold, depth = 0, prevResult = {}) {
    const debug = false
    debug && console.log(`Depth ${depth}: Getting startblock ${startBlockNumber}`)
    // get startBlock
    let startBlock
    try {
        startBlock = await web3.eth.getBlock(startBlockNumber)
        if (startBlock === null) {
            // No idea why this happens sometimes :-( As a workaround try to get the previous block
            debug && console.log(`Got null for block ${startBlockNumber}. Trying previous block....`)
            startBlock = await web3.eth.getBlock(startBlockNumber-1)
        }
        debug && console.log(`Got startBlock ${startBlockNumber} with timestamp ${startBlock.timestamp}`)
    }catch(error) {
        console.log("Error getting block: " + error.message)
    }
    // calculate delta time from startBlock to targetTimestamp
    let deltaSeconds = startBlock.timestamp - targetTimestamp
    debug && console.log(`deltaSeconds: ${deltaSeconds}`)
    // delta < threshold? Return startBlock
    let absDelta = Math.abs(deltaSeconds)
    if (absDelta <= threshold) {
        return startBlock
    } else if ((depth > 0) && (absDelta > prevResult.absDelta)) {
        // Overshoot target! Return previous block
        debug && console.log(`new delta ${absDelta} > previous delta${prevResult.absDelta}! Returning prevResult block...`)
        return prevResult.block
    } else {
        // refine search
        let blockDelta = getBlockDelta(deltaSeconds)
        debug && console.log(`deltaBlocks: ${blockDelta}`)
        if (blockDelta === 0) {
            // can't get any closer. return current result
            return startBlock
        }
        return findBlock(web3, startBlockNumber - blockDelta, targetTimestamp, threshold, depth + 1, {
            absDelta,
            block: startBlock
        })
    }
}
