/* import library */
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

/* import modules, hooks, components */
import { logoutUser } from '../../../store/thunkFunctions'

/* 경로들 */
const routes = [
  { to: "/login", name: '로그인', auth: false },
  { to: "/register", name: '회원가입', auth: false },
  { to: "", name: '로그아웃', auth: true },
]


const NavItem = ({ mobile }) => {
  const isAuth = useSelector(state => state.user?.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser())
      .then(() => {
        navigate('/login');
      })
  }

  return (
    <ul className={`
        text-md justify-center w-full flex gap-4 items-center 
        ${mobile && "flex-col bg-gray-900 h-full"}
    `}>
      {routes.map(({ to, name, auth }) => {
        if (isAuth !== auth) return null;

        if (name === '로그아웃') {
          return <li key={name} className='py-2 text-center border-b-4 cursor-pointer'>
            <Link to={to}
              onClick={handleLogout}
            >
              {name}
            </Link>
          </li>
        } else {
          return <li key={name} className='py-2 text-center border-b-4 cursor-pointer'>
            <Link to={to}>{name}</Link></li>
        }
      })}
    </ul>
  )
}

export default NavItem
