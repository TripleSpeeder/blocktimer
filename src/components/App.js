import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Header, Footer} from './Layouts'
import Content from './Content'
import Container from '@material-ui/core/Container'


function App() {
  return (
      <Container maxwidth={'sm'}>
          <CssBaseline/>

          <Header/>

          <Content/>

          <Footer/>

      </Container>
  );
}

export default App;
