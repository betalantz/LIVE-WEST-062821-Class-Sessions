import React from 'react'
import { Header, Button } from 'semantic-ui-react'

export default function LoggedIn({currUser, onLogout}) {
    // const loggedIn = (<Header size="large">Welcome, {currUser.email}!</Header>)
    return (
        <>
            {currUser ? (
            <>
            <Header size="large">Welcome, {currUser.user.email} !</Header> 
            <Button content="Logout" color="red" onClick={onLogout}/>
            </>
            ): null}
        </>
        
    )
}
