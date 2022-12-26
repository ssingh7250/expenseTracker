import {useRef , useContext} from 'react'
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const authCtx = useContext(AuthContext)
  const newPasswordRef = useRef();
  const submitHandler=(event)=>{
    event.preventDefault();
    const enteredNewPassword = newPasswordRef.current.value;

    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBpwMO3LoFunYPfn2r6DCK8XmYha7ij3YM` ,
    {
      method : 'POST',
      body : JSON.stringify({
        idToken : authCtx.token,
        password :enteredNewPassword,
        returnSecureToken : true
      }),
      headers :{
        'Content-Type' : 'application/json'
      }
      
    }).then(res=>{
       return res.json()
    }).catch(err=>{
      console.log(err.message)
    })
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={newPasswordRef} type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
