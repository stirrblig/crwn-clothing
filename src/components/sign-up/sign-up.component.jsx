import { React, useState } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';
import { useDispatch } from 'react-redux';

const SignUp = () => {
    const dispatch = useDispatch();

    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = userCredentials
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match!")
            return
        }

        try {
            dispatch(signUpStart({ email, password, displayName }));
        } catch (error) {
            console.log(error);

        }
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setCredentials({ ...userCredentials, [name]: value })
    }

    return (
        <div className='sign-up'>
            <h2 className='title'> I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    label='Name'
                    onChange={handleChange}
                    required />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    label='Email'
                    onChange={handleChange}
                    required />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    label='Password'
                    onChange={handleChange}
                    required />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    label='Confirm Password'
                    onChange={handleChange}
                    required />

                <CustomButton type='submit'>Sign up</CustomButton>
            </form>

        </div>
    );
}

export default SignUp;