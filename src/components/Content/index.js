import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import DateTimePickerContainer from './DateTimePickerContainer'
import BlockContainer from './BlockContainer'
import {makeStyles} from '@material-ui/core/styles'
import moment from 'moment'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
}));

export default props => {
    const classes = useStyles()
    const [selectedDate, setDate] = useState(moment())
    const [timestamp, setTimestamp] = useState(1438269988)

    const handleDateChange = (newDate) => {
        setDate(newDate)
        setTimestamp(newDate.unix())
        console.log("Set new date " + newDate.format() + "(" + newDate.unix()+")")
    }

    return (
        <div className={classes.root}>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={2}
            >
                <Grid item xs={4}>
                    <DateTimePickerContainer
                        selectedDate={selectedDate}
                        handleDateChange={handleDateChange}
                    />
                </Grid>
                <Grid item xs={8}>
                    <BlockContainer timestamp={timestamp}/>
                </Grid>
            </Grid>
        </div>
    )
}

