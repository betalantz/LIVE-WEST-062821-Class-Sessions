import React from 'react'
import { Header, Container } from 'semantic-ui-react';
import AuthForm from './AuthForm';

function Login({onLogin}) {

    function loginUser(credentials){
        console.log('credentials: ', credentials);
        
        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        }
        fetch('http://localhost:3000/login', init)
        .then(r => r.json())
        .then(onLogin)
    }

    return (
        <Container>
            <Header size="medium">Login Form</Header>
            <AuthForm onSubmit={loginUser}/>
        </Container>
        
    )
}

export default Login