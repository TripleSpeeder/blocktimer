import React from 'react'
import {Header} from 'semantic-ui-react'


function MyHeader(props) {
    return (
        <Header block as='h1' textAlign='center'>
            <Header.Content>Blocktimer</Header.Content>
            <Header.Subheader>Find Ethereum blocks by date/time or unix timestamp</Header.Subheader>
        </Header>
    )
}

export default MyHeader