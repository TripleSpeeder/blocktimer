import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {Form, Input, Message} from 'semantic-ui-react'

const TimestampInput = ({selectedDateTime, handleDateChange}) => {
    const minTimeStamp = 1438269988
    const [timestamp, setTimestamp] = useState(selectedDateTime.unix())
    const [valid, setValid] = useState(true)

    // use useEffect hook to update state variable when props change
    useEffect(()=>{
        setTimestamp(selectedDateTime.unix())
        setValid(selectedDateTime.unix() >= minTimeStamp )
    }, [selectedDateTime])

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
            <Form.Field>
                <label>Unix timestamp: </label>
                <Input
                    type={'number'}
                    placeholder='Unix timestamp'
                    min={123}
                    value={timestamp}
                    onChange={handleChange}
                />
                <Message
                    error
                    content='Timstamp too small. Ethereum block #1 was mined at 1438269988.'
                />
            </Form.Field>
        </Form>
    )
}

TimestampInput.propTypes = {
    selectedDateTime: PropTypes.object.isRequired,
    handleDateChange: PropTypes.func.isRequired
}

export default TimestampInput
