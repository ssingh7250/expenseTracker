import classes from './Auth.module.css';
import { authAction } from '../store/auth';

import { useSelector , useDispatch } from 'react-redux';


const Auth = () => {
  const dispatch =useDispatch()
  const submitHandler=()=>{
    dispatch(authAction.login())
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button type='submit'>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
