import { useState } from 'react';

// Import other components to be rendered in the Home page
import Post from './common/Post';
import Menu from './common/Menu';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

  // Example posts to test state with, this will be replaced in time with a more dynamic solution
  const [posts, setPosts] = useState([
    {
      id: '1',
      title: 'First Post',
      description: 'This is the description of the first post.',
      likes: 5,
      comments: [
        'Great post!',
        'Thanks for sharing!',
        'Very informative!'
      ]
    },
    {
      id: '2',
      title: 'Second Post',
      description: 'This is the description of the second post.',
      likes: 10,
      comments: [
        'I learned a lot!',
        'Interesting read!',
        'Can you elaborate more?'
      ]
    },
    {
      id: '3',
      title: 'Third Post',
      description: 'This is the description of the third post.',
      likes: 2,
      comments: [
        'Nice perspective!',
        'I disagree with some points.',
        'Looking forward to your next post!'
      ]
    }
  ]);

  return (
    <div className="relative min-h-screen">
      {/* Logo */}
      <img className="pl-2 pb-4 w-22 h-20" src="/Pinit1.png" alt="Description" />

      {/* Login and Sign Up Buttons */}
      <button className="top-right-button1">Sign Up</button>
      <button className="top-right-button2" onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? 'Close Login' : 'Login'}
      </button>
      {showLogin && <LoginForm />}

      {/* Main Content */}
      <div className="h-full">
        <div className="image-container">
          <img className="centered-image" src="https://s3-alpha-sig.figma.com/img/7fef/618f/d4115acc54fc620eb5dd52249742fd7b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WHvT1A5o9-uEW4xDyvj7VIkQ7lSipvzGKI173oe3UgKlTs9AhGQJSgmhlThbcHk11ZUHrICG5YqwhQtPzRAoHtmMwOo5zQaGf7dTfEZnc89q6FXZuPsp201ZIOUh22I9wP~pEKBxKQlVgDLr9MniKu8IEeC3C5U23VhN3vkYmYmAlE1vZtYh~MoX0R733W05rSoZaJ1WTv1xIzDhHUF1G1AUYv8S7KKRjvi-K2tO7JdCxVaqDof0HpbQLIvQAQg4v4aSpMBD9ZhzJM3p8Qjua2vF~gAwUcLqe4BKw~~wqsga4JyGeJj~P0irwfLzlF7NmqSbibZ2P8ri85-kRT9~bw__" />
        </div>
        <div className="search-container">
          <form action="/search" method="get">
            <input type="text" name="query" placeholder="Search for a volunteering opportunity" className="search-input" />
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>
        <h1 className="perfect"><b>Find the Perfect Opportunity for You</b>
          <span className="underline"></span>
        </h1>
        <h2 className="explore"><b>Explore different types of volunteering and find the perfect one for you</b></h2>
        <div className="container">
          <div className="box">
            <img className="image" src="https://s3-alpha-sig.figma.com/img/d3e4/7dfe/2f40c316c292c1ff22cbcdaa8f49a7ba?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MFHd90ELJqpSg~wNkLu9nDnmVfB70L92WAr7k~RhTjF0SNbjLS0hr4VoCTrUe0SCmo3ozQGgm43MI~zmoMmY-zpdAd3po-xGAbrlDMkJ7lkxx7s0CkC-Yu9xbHT4wPQV-dabCD91JPeaDSfGY447w4qMkXxIfm20Hn6Exqw-vlcpAoYLvnVWwr501q0AZI3xk~62z1ISPt6o-xRLkSedByT45gPupQylxQbsD9PKVhfnol~F6WvMDfE80eMhv5uT5WpcbcVaGBr2QFWlZKqYx2ldB23YsTvMXxQIUtnMieyzVEkBHMkDLCLGjl~TdjdD2TTz4Kvh5~2UL5XAUUXS~w__" />
            <div className="text-overlay">
              Medical
            </div>
          </div>
          <div className="box">
            <img className="image" src="https://s3-alpha-sig.figma.com/img/03e0/b6c0/16fc4285b871a29395daaee80a5c1c4b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TmZQWLjKV5eV8SBorh1dopN1mZDVQ2Z98l4A6MzE0bemHwmMwlNozKN~wYbidyOzthh2g5cMT3H4oFx8f52-z3zgIybp54rRKMhcgCwAs2hCA7zdy87QfQHCW5co53MHS9uZbQraoLgntXqfjwxdy3MdhjgiKs6UBBrcCz76gXFJKulEVInMUrv3HoUkEAZlRQ3CRWfzsPyLniAbG7v4XVPZVpjHtjpyAFpUXKQuGotWT5vwcz3wz8iL15wGMktAkqtLf6V1kjCbxCin4~r9SgbdQU-E7Wb0C5tkdtV2WC~exSMSuls7w3YmNOy2hpu5xtwOJOAnBUX4zeqVj2hXfQ__" />
            <div className="text-overlay">Environmental</div>
          </div>
          <div className="box">
            <img className="image" src="https://s3-alpha-sig.figma.com/img/8117/1e5f/a66c9b768881afb4e1634c3867c987c5?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dRNGI2~hkbpYVHh~S8sp9OmZSFbhd81MYvnRJ6R4P2bXkLZCcnHL3Htp2yF94MxCd3xKwiJWgjZAElpMHufrtzc7s~LgJEfvSTO~b7Itf0OtlAMFN0cY--2Y33oTaQD4WYiTR9pBcnO3~~wZ-6tGtM-ZLrBcfJTsWWHBSam6lzY~eGvcKsL7N-~aGPSW4I546bjbcdDT6aCalVk0LoOPw~7haLcP3wt1nhg-dYiou21daiBkVaBztNmyMklIAcNHQXNLqgo13FHnpU1qQB4J1Bmx9jvk6IjKsUoOIR1WpK4YUCGm3GtSJHjKRYA6woJMrMBVIP0KNQ-Wme8xz85NIg__" />
            <div className="text-overlay">Educational</div>
          </div>
        </div>
      </div>

      {/* Footer with Image */}
      <footer className="mt-16 py-4 bg-blue-300">
        <div className="flex justify-center">
          

    
       
          <h class ="font-extrabold text-2xl"> PARTNED WITH</h>
          <img 
            className="w-60 h-40 mb-4 object-contain" 
            src="https://framerusercontent.com/images/dbbtJZcxgIAbQvh9mzsEZ7OZng.svg" 
            alt="Description"
          />
 
     
        </div>

        <p className="text-center text-sm text-gray-600">© 2024 PinIt | All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
