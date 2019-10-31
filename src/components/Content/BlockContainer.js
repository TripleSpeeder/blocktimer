import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment'
import {Button, Card, Icon, Menu} from 'semantic-ui-react'

const GET_BLOCK = gql`
  query Block($timestamp: Int!) {
      block(timestamp: $timestamp) {
        timestamp
        height
        hash
      }
  }
`;

function BlockContainer({timestamp}) {
    const { loading, error, data } = useQuery(GET_BLOCK, {
        variables: { timestamp },
    });

    if (loading) {
        return (<Card>Loading...</Card>)
    } else if (error) {
        return (<Card>Error...</Card>)
        //content = (<div> Error! {error.message}</div>)
    }

    // const timestamp_display = moment.unix(data.block.timestamp).format("MMM-DD-Y, HH:mm:ss")

    return (
        <Card fluid>
            <Card.Content>
                <Card.Header>
                    {"Block #"+data.block.height}
                </Card.Header>
                <Card.Description>
                    {data.block.hash}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                <Button
                    basic
                    color={'green'}
                    href={"https://etherscan.io/block/"+data.block.height}
                    target={'_blank'}
                >
                    view on Etherscan.io
                </Button>
                <Button
                    basic
                    color={'green'}
                    href={"https://www.etherchain.org/block/"+data.block.hash}
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