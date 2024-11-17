import { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {

  // default state for a user, values to be rendered on the menu component
  const [user, setUser] = useState({
    username: "default_user", 
    firstName: "First Name",
    lastName: "Last Name"
  })

  return (
 
    // root div of the component should define the overall style of the container itself
    <div className='w-96 p-6 flex flex-col items-center bg-neutral-700 rounded-xl'>

      {/* import placeholder profile picture for now */}
     <img className="w-36 mb-4 rounded-full " src= "https://media.licdn.com/dms/image/v2/D5603AQEX0EO9e6DhhQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727487579399?e=1737590400&v=beta&t=bhZMsnc3VAmoTILSgQfu08K0IktCnRkNIzZAwn5kXtM" />
      {/*src="https://plus.unsplash.com/premium_photo-1663061406443-48423f04e73d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tbXVuaXR5JTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D"*/}
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