import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import {CardContent} from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import moment from 'moment'

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

    const timestamp_display = moment.unix(data.block.timestamp).format("MMM-DD-Y, HH:mm:ss")

    return (
        <Card>
            <CardHeader
                title={"Block #"+data.block.height}
                subheader={data.block.hash}
            />
            <CardContent>
                Mined on {timestamp_display}
            </CardContent>
            <CardActions>
                <IconButton
                    aria-label="View on Etherscan"
                    title="View on Etherscan"
                    href={"https://etherscan.io/block/"+data.block.height}
                    target='_blank'
                    rel='noopener'
                >
                    <Avatar>ES</Avatar>
                </IconButton>
                <IconButton
                    aria-label="View on Etherchain"
                    title="View on Etherchain"
                    href={"https://www.etherchain.org/block/"+data.block.hash}
                    target='_blank'
                    rel='noopener'
                >
                    <Avatar>EC</Avatar>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default BlockContainer