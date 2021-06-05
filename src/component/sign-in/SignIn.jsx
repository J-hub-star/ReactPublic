import React, { Component } from 'react'

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
                    <input 
                    name='email'
                    value={this.state.email} 
                    required
                    onChange={this.handleChange}
                    />
                    <label>
                        E-Mail
                    </label>
                    <input 
                    name='password'
                    value={this.state.password} 
                    required
                    onChange={this.handleChange}
                    />
                    <label>
                        Password
                    </label>
                    <input 
                        type='submit'
                        value='Submit Form'>
                    </input>
                </form>
                
            </div>
        )
    }
}

export default SignIn;