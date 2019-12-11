import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {findBlock} from '../findBlock'
import BlockDisplay from './BlockDisplay'
import getWeb3 from '../../getWeb3'

const BlockContainer = ({timestamp}) => {
    const [web3, setWeb3] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [block, setBlock] = useState()

    useEffect(()=>{
       let run = async function() {
           try {
               const web3Instance = await getWeb3
               setWeb3(web3Instance)
           }catch(error) {
               setError(error)
           }
           finally {
               setLoading(false)
           }
       }
       run()
    },[])

    useEffect(() => {
        let run = async function() {
            try {
                setError(false)
                setLoading(true)
                let currentBlockNumber = await web3.eth.getBlockNumber()
                let block = await findBlock(web3, currentBlockNumber, timestamp, 120)
                setBlock(block)
            } catch(error) {
                console.log("Error while finding block: " + error.message)
                setError(error)
            } finally{
                setLoading(false)
            }
        }

        if(web3) {
            run()
        }
    }, [web3, timestamp])

    if (loading) {
        return <BlockDisplay loading={true}/>
    }

    if (error) {
        return (
            <BlockDisplay
                error={error}
            />
        )
    }

    if (!block) {
        return (<div>No block loaded</div>)
    }

    const diff = timestamp - block.timestamp

    return (
        <BlockDisplay
            error={error}
            hash={block.hash}
            height={block.number}
            timestamp={block.timestamp}
            diff={diff}
        />
    )
}

BlockContainer.propTypes = {
    timestamp: PropTypes.number,
}

export default BlockContainer