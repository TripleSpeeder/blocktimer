import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {KeyboardDateTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import {makeStyles} from '@material-ui/core'

ExtendedDateTimePicker.propTypes = {
    selectedDate: PropTypes.object.isRequired,
    handleDateChange: PropTypes.func.isRequired
}

const useStyles = makeStyles(theme => ({
    picker: {
        margin: theme.spacing(1),
        flexWrap: 'wrap',
    },
}));

function ExtendedDateTimePicker({selectedDate, handleDateChange}) {
    const classes = useStyles()
    const [localMoment, setLocalMoment] = useState(selectedDate)

    const handleChange = (newMoment) => {
        setLocalMoment(newMoment)
        // Verify that newMoment is a valid moment before passing it on
        if (newMoment && newMoment.isValid()) {
            handleDateChange(newMoment)
        }
    }

    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDateTimePicker
                className={classes.picker}
                value={localMoment}
                onChange={handleChange}
                variant={'inline'}
                ampm={false}
                disableFuture={true}
                format="YYYY-MM-DD HH:mm"
                minDate={'2015-07-30 15:26:28'}
                minDateMessage={'Ethereum block #1 was mined on 2015-07-30 15:26:28!'}
            />
        </MuiPickersUtilsProvider>
    )
}

export default ExtendedDateTimePicker