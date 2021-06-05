import React from 'react';
import SignIn from '../../component/sign-in/SignIn';
import SignUp from '../../component/sign-up/SignUp';
import './Authentication.scss';

const Authentication = () =>{
    return(
        <div className='sign-in-and-sign-up'>
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    )
}

export default Authentication;