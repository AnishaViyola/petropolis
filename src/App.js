import {Routes, Route} from 'react-router-dom'
import { Homee } from './components/Homee'
import { About } from './components/About'
import { Guidelines } from './components/Guidelines'
import { Appointment } from './components/Appointment'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { Bookappointment } from './components/Bookappointment'


function App() {
  
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Homee />} />        

        <Route path='About' element={<About />}>

      </Route>
      <Route path='Guidelines' element={<Guidelines />}></Route>
      <Route path='Appointment' element={<Appointment/>} />
     <Route path='Login' element={<Login />}></Route>
    <Route path='Signup' element={<Signup />}></Route>
    <Route path='Bookappointment' element={<Bookappointment />}></Route>
    
    </Routes>
    
  </>
  );
}

export default App;

