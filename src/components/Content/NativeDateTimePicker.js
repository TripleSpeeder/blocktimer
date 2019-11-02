import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {Form, Input} from 'semantic-ui-react'

const NativeDateTimePicker = ({selectedDateTime, handleDateChange}) => {
    // textfield requires datevalue as string
    // const dateString = selectedDateTime.format("Y-MM-DDThh:mm:ss")

    const handleChange = (event) => {
        console.log("NativeDateTimePicker change: " + event.target.value)
        // If input is valid convert date string to moment.js instance before passing on
        handleDateChange(moment(event.target.value))
    }

    // min: "2015-07-30T15:26:28",
    return (
        <Form>
            <Form.Field>
                <label>Date/Time:</label>
                <Input
                    type="datetime-local"
                    step="1"
                    value={selectedDateTime.format("Y-MM-DDThh:mm:ss")}
                    onChange={handleChange}
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