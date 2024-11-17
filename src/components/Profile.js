import React from 'react'

const Profile = () => {
  return (
    <div>
      <div>
        <img
          className="pl-2 pb-4 w-22 h-20"
          src="/PINIT.png"
          alt="Description"
        />
        <img
          className="w-12 mb-4 rounded-full pfp"
          src="https://media.licdn.com/dms/image/v2/D5603AQEX0EO9e6DhhQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727487579399?e=1737590400&v=beta&t=bhZMsnc3VAmoTILSgQfu08K0IktCnRkNIzZAwn5kXtM"
          alt="Profile"
        />
        <img
          className="bg-image"
          src="/Pattern.png"
          alt="Pattern Background"
        />
      </div>

      <div className="vertical">
        <img
          className="container-image rounded-full"
          src="https://media.licdn.com/dms/image/v2/D5603AQEX0EO9e6DhhQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727487579399?e=1737590400&v=beta&t=bhZMsnc3VAmoTILSgQfu08K0IktCnRkNIzZAwn5kXtM"
          alt="Profile"
        />
        <div className="name">
          <h2>Container 1</h2>
          <p>This is the first container with text beside the image.</p>
        </div>
      </div>
      <div className="vertical">
        <h2>Container 2</h2>
        <p>This is the second container.</p>
      </div>
      <div className="vertical">
        <h2>Container 3</h2>
        <p>This is the third container.</p>
      </div>
    </div>
  );
};

export default Profile;