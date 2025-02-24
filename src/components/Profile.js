import React from 'react'

const Profile = () => {
  return (
    <div>
      <div>
        <img
          className="pl-2 pb-4 w-22 h-20 "
          src="/PINIT.png"
          alt="Description"
        />
           <div className="background-image">
        {/* Containers */}
        <div className="vertical">
        <img class="w-36 rounded-full" src= "https://media.licdn.com/dms/image/v2/D5603AQEX0EO9e6DhhQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727487579399?e=1737590400&v=beta&t=bhZMsnc3VAmoTILSgQfu08K0IktCnRkNIzZAwn5kXtM" />
          <h2>Damian Aguillar</h2>
          <p1>Completed 45 hours total.</p1>
          <button class="edit">Edit Profile</button>
        </div>
        <div className="vertical">
          <h3>Profile Information</h3>
          <p>Email</p>
          <p3>damian.aguilar@hackutd.com</p3>
          <p4>Phone Number</p4>
          <button class="view">View Waivers</button>
        </div>
        <div className="vertical">
          <p12>Your Pinboard</p12>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;