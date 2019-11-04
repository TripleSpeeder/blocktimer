import React, {useState} from 'react'
import {Grid} from 'semantic-ui-react'
import NativeDateTimePicker from './NativeDateTimePicker'
import getUnixTime from 'date-fns/getUnixTime'
import TimestampInput from './TimestampInput'
import BlockContainer from './BlockContainer'
import PropTypes from 'prop-types'

const SelectorContainer = ({showTimestampInput}) => {
    const [selectedTimestamp, setSelectedTimestamp] = useState(getUnixTime(new Date()))

    const handleTimestampChange = (newTimestamp) => {
        setSelectedTimestamp(newTimestamp)
    }

    if (showTimestampInput) {
        return (
            <Grid
                stackable
                centered
                columns={12}
            >
                <Grid.Row verticalAlign={'middle'}>
                    <Grid.Column width={6} textAlign={'center'}>
                        <NativeDateTimePicker
                            handleDateChange={handleTimestampChange}
                            selectedTimestamp={selectedTimestamp}/>
                    </Grid.Column>
                    <Grid.Column width={6} textAlign={'center'}>
                        <TimestampInput
                            handleTimestampChange={handleTimestampChange}
                            selectedTimestamp={selectedTimestamp}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign={'center'} width={12}>
                        <BlockContainer timestamp={selectedTimestamp}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    } else {
        return (
            <Grid
                centered
                columns={12}
            >
                <Grid.Row verticalAlign={'middle'}>
                    <Grid.Column width={12} textAlign={'center'}>
                        <NativeDateTimePicker
                            handleDateChange={handleTimestampChange}
                            selectedTimestamp={selectedTimestamp}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign={'center'} width={12}>
                        <BlockContainer timestamp={selectedTimestamp}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

SelectorContainer.propTypes = {
    showTimestampInput: PropTypes.bool,
}

SelectorContainer.defaultProps = {
    showTimestampInput: true
};

export default SelectorContainer