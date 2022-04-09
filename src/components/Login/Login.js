import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className='form-container'>
      <div>
        <h2 className='form-title'>Login</h2>
        <form>
          <div className='input-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' />
          </div>
          <div className='input-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' />
          </div>
          <button className='submit-btn' type='submit'>
            Login
          </button>
        </form>
        <p>
          New to Ema John? <Link to={'/signup'}>Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
