import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import DateTimePicker from './ExtendedDateTimePicker'
import NativeDateTimePicker from './NativeDateTimePicker'
import {FormControlLabel} from '@material-ui/core'
import Switch from '@material-ui/core/Switch'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function DateTimePickerContainer({selectedDate, handleDateChange}) {
    const classes = useStyles()
    const [useExtendedPicker, setUseExtendedPicker] = useState(false)

    const handleUseExtendedChange = (event) => {
        setUseExtendedPicker(event.target.checked)
    }

    return (
        <Paper className={classes.paper}>
            <FormControlLabel
                control={
                    <Switch
                        checked={useExtendedPicker}
                        onChange={handleUseExtendedChange}
                        color={'primary'}
                    />
                }
                label="Use extended Picker"
            />
            {useExtendedPicker ? (
                <DateTimePicker selectedDate={selectedDate} handleDateChange={handleDateChange}/>
                ):(
                <NativeDateTimePicker selectedDate={selectedDate} handleDateChange={handleDateChange}/>
                )
            }
        </Paper>
    );
}



export default DateTimePickerContainer