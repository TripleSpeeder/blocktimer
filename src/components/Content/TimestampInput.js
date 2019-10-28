import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {Form, Input, Message} from 'semantic-ui-react'

const TimestampInput = ({selectedDate, handleDateChange}) => {
    const minTimeStamp = 1438269988
    const [timestamp, setTimestamp] = useState(selectedDate.unix())
    const [valid, setValid] = useState(true)

    useEffect(()=>{
        console.log("Effect! date: " + selectedDate.format())
        setTimestamp(selectedDate.unix())
    }, [selectedDate])

    const handleChange = (event) => {
        let newTimeStamp = event.target.value
        console.log("Timestamp change: " + newTimeStamp)
        setTimestamp(newTimeStamp)
        if (newTimeStamp < minTimeStamp) {
            setValid(false)
        }
        else {
            setValid(true)
            // valid timestamp, convert to moment.js instance and call handleDateChange()
            handleDateChange(moment.unix(newTimeStamp))
        }
    }

    return (
        <Form error={valid?false:true}>
            <Form.Field inline>
                <label>Timestamp: </label>
                <Input
                    type={'number'}
                    placeholder='Unix timestamp'
                    min={123}
                    value={timestamp}
                    onChange={handleChange}
                />
                <Message
                    error
                    content='Timstamp too small'
                />
            </Form.Field>
        </Form>
    )
}

TimestampInput.propTypes = {
    selectedDate: PropTypes.object.isRequired,
    handleDateChange: PropTypes.func.isRequired
}

export default TimestampInput
