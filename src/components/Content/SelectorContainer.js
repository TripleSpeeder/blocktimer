import React, {useState} from 'react'
import {Button, Card, Grid, Icon} from 'semantic-ui-react'
import NativeDateTimePicker from './NativeDateTimePicker'
import moment from 'moment'
import TimestampInput from './TimestampInput'
import BlockContainer from './BlockContainer'

const SelectorContainer = () => {
    const [selectedDateTime, setDateTime] = useState(moment())

    const handleDateTimeChange = (newDate) => {
        console.log("Container new date: " + newDate.format() + " (" + newDate.unix()+")")
        setDateTime(newDate)
    }

    const handleBlockHeightChange = (newHeight) => {
        console.log("Container new height: " + newHeight)
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
                    <BlockContainer timestamp={selectedDateTime.unix()} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default SelectorContainer