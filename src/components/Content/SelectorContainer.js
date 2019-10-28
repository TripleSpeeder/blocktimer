import React, {useState} from 'react'
import {Grid, Icon} from 'semantic-ui-react'
import NativeDateTimePicker from './NativeDateTimePicker'
import moment from 'moment'
import TimestampInput from './TimestampInput'

const SelectorContainer = () => {
    const [selectedDateTime, setDateTime] = useState(moment())

    const handleDateTimeChange = (newDate) => {
        console.log("Container new date: " + newDate.format() + " (" + newDate.unix()+")")
        setDateTime(newDate)
    }

    return (
        <Grid
            centered
            columns={12}
        >
            <Grid.Row verticalAlign={'middle'}>
                <Grid.Column width={5} textAlign={'right'}>
                    <NativeDateTimePicker
                        handleDateChange={handleDateTimeChange}
                        selectedDate={selectedDateTime}/>
                </Grid.Column>
                <Grid.Column width={2} textAlign={'center'}>
                    <Icon name={'arrows alternate horizontal'}/>
                </Grid.Column>
                <Grid.Column width={5} textAlign={'left'}>
                    <TimestampInput
                        handleDateChange={handleDateTimeChange}
                        selectedDate={selectedDateTime}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column textAlign={'right'}>
                    prev
                </Grid.Column>
                <Grid.Column textAlign={'center'} width={6}>
                    Block info here or "loading"
                </Grid.Column>
                <Grid.Column textAlign={'left'}>
                    next
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default SelectorContainer