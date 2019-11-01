import React, {useEffect, useState} from 'react'
import gql from 'graphql-tag';
import {useLazyQuery, useQuery} from '@apollo/react-hooks'
import {Button, Card, Icon, Input, Menu} from 'semantic-ui-react'

const GET_BLOCK_BY_TIMESTAMP = gql`
  query Block($timestamp: Int!) {
      block(timestamp: $timestamp) {
        timestamp
        height
        hash
      }
  }
`;

const GET_BLOCK_BY_HEIGHT = gql`
  query Block($height: Int!) {
      block(height: $height) {
        timestamp
        height
        hash
      }
  }
`;


function BlockContainer({timestamp}) {
    const [block, setBlock] = useState(null)
    const [getBlockByTimestamp, { loading: loading_by_Timestamp, error: error_by_timestamp, data: data_by_timestamp,}] = useLazyQuery(GET_BLOCK_BY_TIMESTAMP)
    const [getBlockByHeight,    { loading: loading_by_Height,    error: error_by_height,    data: data_by_height    }] = useLazyQuery(GET_BLOCK_BY_HEIGHT)

    // trigger loading of block depending on timestamp prop
    useEffect(()=>{
        getBlockByTimestamp({ variables: { timestamp: timestamp } })
    }, [timestamp])

    // update block when requested by timestamp
    useEffect(()=>{
        if (data_by_timestamp && data_by_timestamp.block) {
            setBlock(data_by_timestamp.block)
        }
    }, [data_by_timestamp])

    // update block when requested by height
    useEffect(()=>{
        if (data_by_height && data_by_height.block) {
            setBlock(data_by_height.block)
        }
    }, [data_by_height])

    // trigger loading of block depending on local blockheight change
    const handleHeightChange = (event) => {
        const height = event.target.value
        console.log("Fetching block for height " + height)
        getBlockByHeight({ variables: { height: height } })
    }

    const loading = loading_by_Height || loading_by_Timestamp
    const error = error_by_height || error_by_timestamp
    // const block = data_by_timestamp ? data_by_timestamp.block : (data_by_height? data_by_height.block : null)


    if (loading || block==null) {
        return (<Card>Loading...</Card>)
    } else if (error) {
        return (
            <Card>
                <Card.Content>
                    <Card.Header>
                        Error!
                    </Card.Header>
                    <Card.Description>
                        {error.message}
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }

    return (
        <Card fluid>
            <Card.Content>
                <Card.Header>
                    Block #&nbsp;
                    <Input
                        size={'huge'}
                        type={'number'}
                        transparent
                        value={block.height}
                        min={1}
                        onChange={handleHeightChange}
                    />
                </Card.Header>
                <Card.Description>
                    {block.hash}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                <Button
                    basic
                    color={'green'}
                    href={"https://etherscan.io/block/"+block.height}
                    target={'_blank'}
                >
                    view on Etherscan.io
                </Button>
                <Button
                    basic
                    color={'green'}
                    href={"https://www.etherchain.org/block/"+block.hash}
                    target={'_blank'}
                >
                    view on Etherchain.org
                </Button>
                </div>
            </Card.Content>
        </Card>
    )
}

export default BlockContainer