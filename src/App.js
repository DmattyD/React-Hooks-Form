import React, { useState } from 'react';
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'


const App = () => {

  const usersData= [
    { id: 1, name: "name 1", username: 'user1' },
    { id: 2, name: "name 2", username: 'user2' },
    { id: 3, name: "name 3", username: 'user3' },
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...useState, user])
  }
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className="flex-large">
          <h2> View Users</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  )
}
export default App;
