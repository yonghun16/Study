import { Outlet } from 'react-router-dom';
import Navbar from './layout/NavBar';
import Footer from './layout/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
