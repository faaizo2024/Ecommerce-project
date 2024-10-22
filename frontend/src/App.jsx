
 import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

export default function App() {
  return (
    <>

     <Navbar/>
     
     <Outlet/>
     <Footer/>

    </>
  )
}