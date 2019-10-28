import React from 'react'
import {Header, Icon} from 'semantic-ui-react'


function MyHeader(props) {
    return (
        <Header as='h1' icon textAlign='center'>
            <Icon name='ethereum' inverted={false} color={'orange'} circular size={'massive'} />
            <Header.Content>BlockTimer</Header.Content>
        </Header>
    )
}

export default MyHeader