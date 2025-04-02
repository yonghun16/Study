import Counter from './components/Counter';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import Header from './components/Header';

import { useSelector } from 'react-redux';


function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuth);

  return (
    <>
      {<Header />}
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
