import React, {useState} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {Form, Input} from 'semantic-ui-react'

const NativeDateTimePicker = ({selectedDate, handleDateChange}) => {
    // textfield requires datevalue as string
    const dateString = selectedDate.format("Y-MM-DDThh:mm")

    const handleChange = (event) => {
        console.log("NativeDateTimePicker change: " + event.target.value)
        // If input is valid convert date string to moment.js instance before passing on
        handleDateChange(moment(event.target.value))
    }

    // min: "2015-07-30T15:26",
    return (
        <Form>
            <Form.Field inline>
                <label>Date/Time:</label>
                <Input
                    type="datetime-local"
                    value={dateString}
                    onChange={handleChange}
                />
            </Form.Field>
        </Form>
    )
}

NativeDateTimePicker.propTypes = {
    selectedDate: PropTypes.object.isRequired,
    handleDateChange: PropTypes.func.isRequired
}

export default NativeDateTimePicker