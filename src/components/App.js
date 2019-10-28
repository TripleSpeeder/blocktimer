import React from 'react'
import {MyHeader} from './Layouts'
import Content from './Content'
import {Container} from 'semantic-ui-react'
import SelectorContainer from './Content/SelectorContainer'


function App() {
    return (
            <Container style={{ marginTop: '3em' }}>
                <MyHeader/>
                <SelectorContainer/>
            </Container>
    )
}

export default App
