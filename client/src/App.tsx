import Navbar from './components/Navbar'
import Map from './components/Map'
import Form from './components/Form'
import Footer from './components/Footer'
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar/>
      <Map/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default App
