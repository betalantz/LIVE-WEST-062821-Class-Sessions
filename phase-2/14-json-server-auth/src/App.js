import React, { useState, useEffect } from 'react'
import './App.css';
import Signup from './Signup'
import UserList from './UserList'
import LoggedIn from './LoggedIn'
import Login from './Login'
import SpacecraftForm from './SpacecraftForm'
import CraftList from './CraftList'
import { Container } from 'semantic-ui-react'

function App() {

  const [users, setUsers] = useState([])
  const [currUser, setCurrUser] = useState(null)
  const [craft, setCraft] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/users')
    .then(r => r.json())
    .then(setUsers)
    fetch('http://localhost:3000/spacecraft')
    .then(r => r.json())
    .then(setCraft)
  }, [])

  function addUser(user){
    setUsers([...users, user])
  }

  function authorizeUser(user){
    setCurrUser(user)
  }

  function logOut(){
    setCurrUser(null)
  }

  function postCraft(formCraft){
    if (currUser) {
      const init = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${currUser.accessToken}`
        },
        body: JSON.stringify({
          ...formCraft,
          userId: currUser.user.id
        })
      }
      fetch('http://localhost:3000/spacecraft', init)
      .then(r => r.json())
      .then(newCraft => setCraft([...craft, newCraft]))
      .catch(error => alert(error))

    } else {
      alert("Must be logged in")
    }

  }

  return (
    <div>
      <LoggedIn currUser={currUser} onLogout={logOut} />
      <Signup onPosted={addUser}/>
      <Login onLogin={authorizeUser}/>
      <UserList users={users}/>
      <Container>
        <SpacecraftForm onSubmit={postCraft}/>
        <CraftList craft={craft} />
      </Container>
    </div>
  );
}

export default App;
