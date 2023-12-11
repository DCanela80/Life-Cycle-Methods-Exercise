import { HomePage, FilmsPage} from './pages';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import NavBar from './pages/NavBar';
import './App.css'


export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/films' element={<FilmsPage />}/> 
      </Routes>
    </BrowserRouter>

  )
 
}
