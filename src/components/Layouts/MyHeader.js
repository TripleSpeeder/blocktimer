import React from 'react'
import {Header, Icon} from 'semantic-ui-react'


function MyHeader(props) {
    return (
        <Header as='h1' textAlign='center'>
            <Header.Content>Blocktimer</Header.Content>
            <Header.Subheader>Search Ethereum blocks by date/time or unix timestamp</Header.Subheader>
        </Header>
    )
}

export default MyHeader