import React from 'react'
import { Header, Container } from 'semantic-ui-react';
import AuthForm from './AuthForm';

function Signup({onPosted}) {

    function createUser(newUser){
        console.log('newUser: ', newUser);
        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }
        fetch('http://localhost:3000/signup', init)
        .then(r => r.json())
        .then(resUser => onPosted(resUser.user))
    }

    return (
        <Container>
            <Header size="medium">Signup Form</Header>
            <AuthForm onSubmit={createUser}/>
        </Container>
        
    )
}

export default Signup