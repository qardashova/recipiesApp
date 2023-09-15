import './styles/reset.scss'
import './styles/font-styles.scss'
import {Routes,Route} from 'react-router-dom'
import Home from "./components/Home/Home"
import Details from './components/Details/Details'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:id' element={<Details/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
