import React, {useState} from 'react'
import {Grid, Icon} from 'semantic-ui-react'
import NativeDateTimePicker from './NativeDateTimePicker'
import moment from 'moment'
import gql from 'graphql-tag';
import TimestampInput from './TimestampInput'
import {useQuery} from '@apollo/react-hooks'
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


const SelectorContainer = () => {
    const [selectedDateTime, setDateTime] = useState(moment())

    const {loading, error, data, refetch} = useQuery(GET_BLOCK, {
        variables: {
            timestamp: selectedDateTime.unix(),
        }
    })
    const block = (data && data.block) ? data.block : null

    const handleDateTimeChange = (newDate) => {
        console.log("Container new date: " + newDate.format() + " (" + newDate.unix()+")")
        setDateTime(newDate)
    }

    const handleBlockHeightChange = (newHeight) => {
        console.log("Container new height: " + newHeight)
        refetch({ variables: { height: newHeight } })
    }

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
                                  error={error}
                                  handleHeightChange={handleBlockHeightChange}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default SelectorContainer