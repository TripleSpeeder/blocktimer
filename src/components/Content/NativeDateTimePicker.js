import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import moment from 'moment'
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined'
import IconButton from '@material-ui/core/IconButton'


const useStyles = makeStyles(theme => ({
    container: {
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
    }
}));

const NativeDateTimePicker = ({selectedDate, handleDateChange}) => {
    // textfield requires datevalue as string
    const dateString = selectedDate.format("Y-MM-DDThh:mm")

    const classes = useStyles()
    const [dateTimeInput, setDateTimeInput] = useState(dateString)

    const handleSubmit = (ev) => {
        ev.preventDefault()
        console.log("Submitted: " + dateTimeInput)
        // Convert date string to moment.js instance before passing on
        handleDateChange(moment(dateTimeInput))
    }

    const handleChange = (event) => {
        console.log("handleChange: " + event.target.value)
        setDateTimeInput(event.target.value)
    }

    return (
        <form
            id={'myForm'}
            className={classes.container}
        >
            <TextField
                type="datetime-local"
                margin="normal"
                className={classes.textField}
                required={true}
                value={dateTimeInput}
                onChange={handleChange}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    min: "2015-07-30T15:26",
                }}
            />
            <IconButton
                type="submit"
                color="primary"
                component="span"
                onClick={handleSubmit}
            >
                <KeyboardArrowRightOutlinedIcon/>
            </IconButton>
        </form>
    )
}

NativeDateTimePicker.propTypes = {
    selectedDate: PropTypes.object.isRequired,
    handleDateChange: PropTypes.func.isRequired
}

export default NativeDateTimePicker