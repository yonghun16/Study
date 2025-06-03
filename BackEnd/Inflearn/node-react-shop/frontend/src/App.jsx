/* import library */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* import components, modules, hooks */
import { Outlet } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './layout/NavBar';
import Footer from './layout/Footer';


function App() {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <ToastContainer 
        position="bottom-right"
        theme='light'
        pauseOnHover
        autoClose={1500}
      />

      <Navbar />
      <main className='mb-auto w-10/12 max-w-4xl mx-auto'>
        <Outlet />
      </main>
      <Footer />

    </div>
  )
}

export default App
