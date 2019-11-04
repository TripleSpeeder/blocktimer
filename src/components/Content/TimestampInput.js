import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {Form, Input, Message} from 'semantic-ui-react'

const TimestampInput = ({selectedTimestamp, handleTimestampChange}) => {
    const minTimeStamp = 1438269988
    const [timestamp, setTimestamp] = useState(selectedTimestamp)
    const [valid, setValid] = useState(true)

    // use useEffect hook to update state variable when props change
    useEffect(()=>{
        setTimestamp(selectedTimestamp)
        // assume that timestamp coming in via props is always valid. Is this secure?
        setValid(true)
    }, [selectedTimestamp])

    const handleChange = (event) => {
        let newTimeStamp = parseInt(event.target.value)
        setTimestamp(newTimeStamp)
        if (newTimeStamp < minTimeStamp) {
            setValid(false)
        }
        else {
            setValid(true)
            handleTimestampChange(newTimeStamp)
        }
    }

    return (
        <Form error={!valid}>
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
                    content={'Timstamp too small. Ethereum block #1 was mined at ' + minTimeStamp}
                />
            </Form.Field>
        </Form>
    )
}

TimestampInput.propTypes = {
    selectedTimestamp: PropTypes.number.isRequired,
    handleTimestampChange: PropTypes.func.isRequired
}

export default TimestampInput
