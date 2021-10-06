import { React, useState } from 'react'

import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { useDispatch } from 'react-redux';

const SignIn = () => {
    const dispatch = useDispatch();

    const [userCredentials, setCredentials] = useState({ email: '', password: '' });

    const { email, password } = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();

        dispatch(emailSignInStart({ email, password }));
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name='email' type='email' value={email} onChange={handleChange} required label='Email' />
                <FormInput name='password' type='password' value={password} onChange={handleChange} required label='Password' />
                <div className='buttons'>
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton type="button" onClick={() => dispatch(googleSignInStart())} isGoogleSignIn >Sign in with Google</CustomButton>
                </div>
            </form>
        </div>

    )
}

export default SignIn