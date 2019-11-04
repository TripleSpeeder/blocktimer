import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {Form, Message} from 'semantic-ui-react'
import getUnixTime from 'date-fns/getUnixTime'
import fromUnixTime from 'date-fns/fromUnixTime'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const NativeDateTimePicker = ({selectedTimestamp, handleDateChange}) => {
    const [timestamp, setTimestamp] = useState(selectedTimestamp)
    const [valid, setValid] = useState(true)
    const [errorMessage, setErrorMessage] = useState()

    // use useEffect hook to update state variable when props change
    useEffect(()=>{
        setTimestamp(selectedTimestamp)
        // assume that date coming in via props is always valid. Is this secure?
        setValid(true)
    }, [selectedTimestamp])

    const minTimeStamp = 1438269988
    const minDateTime = fromUnixTime(minTimeStamp)

    const handleChange = (newDate) => {
        const newTimestamp = getUnixTime(newDate)
        setTimestamp(newTimestamp)
        if (newTimestamp < minTimeStamp) {
            setValid(false)
            setErrorMessage(`Date too early. Ethereum block #1 was mined at ${minDateTime}`)
        } else if (newTimestamp > getUnixTime(new Date())) {
            setValid(false)
            setErrorMessage("Date in future.")
        } else {
            // All good!
            setValid(true)
            handleDateChange(newTimestamp)
        }
    }

    return (
        <Form error={!valid}>
            <Form.Field>
                <label>Date/Time:</label>
                <DatePicker
                    selected={fromUnixTime(timestamp)}
                    showTimeInput
                    showYearDropdown
                    dateFormat="yyyy-MM-dd HH:mm:ss OOOO"
                    timeFormat="HH:mm:ss"
                    minDate={minDateTime}
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
    selectedTimestamp: PropTypes.number.isRequired,
    handleDateChange: PropTypes.func.isRequired
}

export default NativeDateTimePicker