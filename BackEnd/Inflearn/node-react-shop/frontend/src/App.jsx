import { Outlet } from 'react-router-dom';
import Navbar from './layout/NavBar';
import Footer from './layout/Footer';

function App() {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Navbar />
      <main className='mb-auto w-10/12 max-w-4xl mx-auto'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
