import classes from './Header.module.css';
import { authAction } from '../store/auth';

import { useSelector , useDispatch } from 'react-redux';


const Header = () => {
  const dispatch =useDispatch()
  const auth = useSelector(state=>state.auth.isAuthenticated)
  
  const logoutHandler=()=>{
    dispatch(authAction.logout())
  }


  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {auth &&<li>
            <a href='/'>My Products</a>
          </li>}
          {auth && <li>
            <a href='/'>My Sales</a>
          </li>}
          {auth &&<li>
            <button onClick={logoutHandler}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
