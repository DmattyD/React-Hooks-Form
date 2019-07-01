import React from 'react'

const initialFormState = { id: null, name: '', username: ''}

const [user, seUser] = useState(initialFormState)

const AddUserForm = props => {
    return (
        <form>
            <label>Name</label>
            <input type="text" name="name" value="" />
            <label>Username</label>
            <input type="text" name="username" value="" />
            <button>Add New User</button>
        </form>
    )
}

export default AddUserForm