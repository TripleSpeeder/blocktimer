import React from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks'
import moment from 'moment'
import BlockDisplay from './BlockDisplay'

const GET_BLOCK = gql`
  query Block($timestamp: Int, $height: Int) {
      block(timestamp: $timestamp, height: $height) {
        timestamp
        height
        hash
      }
  }
`;

const BlockContainer = ({timestamp}) => {
    const {loading, error, data} = useQuery(GET_BLOCK, {
        variables: {
            timestamp: timestamp,
        },
    })

    if (loading) {
        return <BlockDisplay loading={true}/>
    }

    const diff = moment.unix(data.block.timestamp).diff(moment.unix(timestamp), 'seconds')

    return (
        <div>
            <BlockDisplay
                error={error}
                hash={data.block.hash}
                height={data.block.height}
                timestamp={data.block.timestamp}
                diff={diff}
            />
        </div>
    )
}

BlockContainer.propTypes = {
    timestamp: PropTypes.number,
}

export default BlockContainer