import React, {useEffect, useState} from 'react'
import {Button, Card, Grid, Icon} from 'semantic-ui-react'
import NativeDateTimePicker from './NativeDateTimePicker'
import moment from 'moment'
import gql from 'graphql-tag';
import TimestampInput from './TimestampInput'
import {useLazyQuery} from '@apollo/react-hooks'
import BlockDisplay from './BlockDisplay'

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


const SelectorContainer = () => {
    const [selectedDateTime, setDateTime] = useState(moment())
    const [block, setBlock] = useState(null)
    const [loading, setLoading] = useState(true)
    const [getBlockByTimestamp, { loading: loading_by_Timestamp, error: error_by_timestamp, data: data_by_timestamp,}] = useLazyQuery(GET_BLOCK_BY_TIMESTAMP)
    const [getBlockByHeight,    { loading: loading_by_Height,    error: error_by_height,    data: data_by_height    }] = useLazyQuery(GET_BLOCK_BY_HEIGHT)

    // update block when requested by timestamp
    useEffect(()=>{
        if (data_by_timestamp && data_by_timestamp.block) {
            setBlock(data_by_timestamp.block)
            setLoading(false)
        }
    }, [data_by_timestamp])

    // update block when requested by height
    useEffect(()=>{
        if (data_by_height && data_by_height.block) {
            setBlock(data_by_height.block)
            setDateTime(moment.unix(data_by_height.block.timestamp))
            setLoading(false)
        }
    }, [data_by_height])

    const handleDateTimeChange = (newDate) => {
        console.log("Container new date: " + newDate.format() + " (" + newDate.unix()+")")
        setDateTime(newDate)
        setBlock(null)
        setLoading (true)
        getBlockByTimestamp({ variables: { timestamp: newDate.unix() } })
    }

    const handleBlockHeightChange = (newHeight) => {
        console.log("Container new height: " + newHeight)
        setLoading(true)
        setBlock(null)
        getBlockByHeight({ variables: { height: newHeight } })
    }

    const error = error_by_height || error_by_timestamp

    return (
        <Grid
            centered
            columns={12}
        >
            <Grid.Row verticalAlign={'middle'}>
                <Grid.Column width={5} textAlign={'center'}>
                    <NativeDateTimePicker
                        handleDateChange={handleDateTimeChange}
                        selectedDateTime={selectedDateTime}/>
                </Grid.Column>
                <Grid.Column width={2} textAlign={'center'}>
                    <Icon name={'arrows alternate horizontal'}/>
                </Grid.Column>
                <Grid.Column width={5} textAlign={'center'}>
                    <TimestampInput
                        handleDateChange={handleDateTimeChange}
                        selectedDateTime={selectedDateTime}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column textAlign={'center'} width={12}>
                    <BlockDisplay block={block}
                                  loading={loading}
                                  handleHeightChange={handleBlockHeightChange}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default SelectorContainer