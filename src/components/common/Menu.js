import { useState } from 'react'
import { Link } from 'react-router-dom'
import React from 'react';


const Menu = () => {

  // default state for a user, values to be rendered on the menu component
  const [user, setUser] = useState({
    username: "default_user",
    firstName: "First",
    lastName: "Last"
  })

  return (

    // root div of the component should define the overall style of the container itself
    <div className='w-96 p-6 flex flex-col items-center bg-neutral-700 rounded-xl mt-20'>

      {/* import placeholder profile picture for now */}
<<<<<<< Updated upstream
      <img className="w-36 mb-4 rounded-full " src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg" />
=======
      <img className="w-74 mb-4 rounded-full mt-15" src="https://plus.unsplash.com/premium_photo-1663061406443-48423f04e73d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tbXVuaXR5JTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D" />
>>>>>>> Stashed changes
      
      {/* render user info from the user state */}
      <h2><b>{user.username}</b></h2>
      <p>{user.firstName} {user.lastName}</p>
      <hr></hr>

      {/* navigation menu, links to other pages in the website */}
      <div className='flex flex-col my-4'>
        <Link to="/">Home</Link>
        <Link to="/new/post">New Post</Link>
        <Link to="/settings">Settings</Link>

      </div>
    </div>
  )
}

export default Menu