import React, { Component } from 'react'
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/CustomButton';
import './SignIn.scss';
import {signInWithGoogle} from '../../firebase/firebase.utlis.js';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({'email':'','password':''})
        
    }
    handleChange(e){
        const {value,name} = e.target;
        this.setState({[name]:value})

        
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign In</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    label='email'
                    name='email'
                    value={this.state.email} 
                    required
                    handleChange={this.handleChange}
                    />
                    <FormInput 
                    label='password'
                    value={this.state.password} 
                    required
                    name='password'
                    handleChange={this.handleChange}
                    />
                    <CustomButton type='submit' > Sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                    Sign in with Google
                    </CustomButton>
                        
                </form>
                
            </div>
        )
    }
}

export default SignIn;