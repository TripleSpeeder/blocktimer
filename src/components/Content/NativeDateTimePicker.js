import React, {useState} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {Form, Input, Message} from 'semantic-ui-react'

const NativeDateTimePicker = ({selectedDateTime, handleDateChange}) => {
    const [dateTime, setDateTime] = useState(selectedDateTime.format("Y-MM-DDThh:mm:ss"))
    const [valid, setValid] = useState(true)
    const [errorMessage, setErrorMessage] = useState()
    const minMoment = moment("2015-07-30T15:26:28")

    const handleChange = (event) => {
        const dateTimeString = event.target.value
        console.log("NativeDateTimePicker change: " + dateTimeString)
        setDateTime(dateTimeString)
        const dateTimeAsMoment = moment(dateTimeString)
        // only valid date/time will be passed on to controller
        if (dateTimeAsMoment.isValid()) {
            if (dateTimeAsMoment.isSameOrAfter(minMoment)) {
                if (dateTimeAsMoment.isSameOrBefore(moment()))
                {
                    setValid(true)
                    handleDateChange(moment(event.target.value))
                }
                else {
                    setValid(false)
                    setErrorMessage("Date in future.")
                }
            }
            else {
                setValid(false)
                setErrorMessage("Date too early. Ethereum block #1 was mined at 2015-07-30T15:26:28")
            }
        }
        else {
            setValid(false)
            setErrorMessage("Could not parse date")
        }
    }

    return (
        <Form error={!valid}>
            <Form.Field>
                <label>Date/Time:</label>
                <Input
                    type="datetime-local"
                    step="1"
                    value={dateTime}
                    onChange={handleChange}
                />
                <Message
                    error
                    content={errorMessage}
                />
            </Form.Field>
        </Form>
    )
}

NativeDateTimePicker.propTypes = {
    selectedDateTime: PropTypes.object.isRequired,
    handleDateChange: PropTypes.func.isRequired
}

export default NativeDateTimePicker