import React from 'react'
import {MyHeader, Footer} from './Layouts'
import {Container} from 'semantic-ui-react'
import SelectorContainer from './Content/SelectorContainer'
import IpfsInfo from './Content/IpfsInfo'


function App() {
    return (
            <Container style={{ marginTop: '1em' }}>
                <MyHeader/>
                <SelectorContainer/>
                <IpfsInfo/>
                <Footer/>
            </Container>
    )
}

export default App
