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
                <Grid.Column textAlign={'right'} verticalAlign={'middle'} >
                    <Button icon size={'large'}>
                        <Icon name={'caret left'}/>
                    </Button>
                </Grid.Column>
                <Grid.Column textAlign={'center'} width={10}>
                    <BlockContainer timestamp={selectedDateTime.unix()} />
                </Grid.Column>
                <Grid.Column textAlign={'left'} verticalAlign={'middle'} >
                    <Button icon size={'large'}>
                        <Icon name={'caret right'}/>
                    </Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default SelectorContainer