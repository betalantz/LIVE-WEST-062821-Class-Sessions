import React from 'react'
import { Header, Container } from 'semantic-ui-react'

export default function UserList({users}) {

    const userLis = users.map(u => <li key={u.id}>ID: {u.id} | Email: {u.email}</li>)
    return (
        <Container>
            <Header size="small">All users:</Header>
            <ul>
                {users.length ? userLis: "No users currently registered"}
            </ul>
            
        </Container>
    )
}
