import Header from './components/Header'
import Map from './components/Map'
import Form from './components/Form'
import Footer from './components/Footer'
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header/>
      <Map/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default App
