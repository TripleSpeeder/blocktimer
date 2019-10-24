import React from 'react'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'


function Header(props) {
    return (
        <AppBar position={'static'}>
            <Toolbar>
                <Typography variant='h1' color={'inherit'}>
                    Blocktimer
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header