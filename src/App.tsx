import Navbar from './components/Navbar'
import Map from './components/Map'
import Form from './components/Form'
import Footer from './components/Footer'
import CssBaseline from '@mui/material/CssBaseline';

import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <CssBaseline />
        <Navbar/>
        <Map/>
        <Form/>
        <Footer/>
      </div>
    </ApolloProvider>
  )
}

export default App
