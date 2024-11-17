const Home = () => {
  return (
    <>
      <img className="pl-2 pb-4 w-22 h-20" src="/PINIT.png" alt="Description" /> 
      <button class="top-right-button1">Sign Up</button>
      <button class="top-right-button2">Login</button>
      <div className="h-full">
      <div class="image-container">
     <img className="centered-image" src= "https://s3-alpha-sig.figma.com/img/7fef/618f/d4115acc54fc620eb5dd52249742fd7b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WHvT1A5o9-uEW4xDyvj7VIkQ7lSipvzGKI173oe3UgKlTs9AhGQJSgmhlThbcHk11ZUHrICG5YqwhQtPzRAoHtmMwOo5zQaGf7dTfEZnc89q6FXZuPsp201ZIOUh22I9wP~pEKBxKQlVgDLr9MniKu8IEeC3C5U23VhN3vkYmYmAlE1vZtYh~MoX0R733W05rSoZaJ1WTv1xIzDhHUF1G1AUYv8S7KKRjvi-K2tO7JdCxVaqDof0HpbQLIvQAQg4v4aSpMBD9ZhzJM3p8Qjua2vF~gAwUcLqe4BKw~~wqsga4JyGeJj~P0irwfLzlF7NmqSbibZ2P8ri85-kRT9~bw__" />
     </div>
     <div class="search-container">
  <form action="/search" method="get">
    <input type="text" name="query" placeholder="Search for a volunteering opportunity" class="search-input" />
    <button type="submit" class="search-button">Search</button>
    </form>
    </div>
    <h1 className="perfect"><b>Find the Perfect Opportunity for You</b>
    <span class="underline"></span>
    </h1>
    
    <h2 className="explore"><b>Explore different types of volunteering and find the perfect one for you</b></h2>
    
    <div class="container">
  <div class="box">
  <img class="image" src= "https://s3-alpha-sig.figma.com/img/d3e4/7dfe/2f40c316c292c1ff22cbcdaa8f49a7ba?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MFHd90ELJqpSg~wNkLu9nDnmVfB70L92WAr7k~RhTjF0SNbjLS0hr4VoCTrUe0SCmo3ozQGgm43MI~zmoMmY-zpdAd3po-xGAbrlDMkJ7lkxx7s0CkC-Yu9xbHT4wPQV-dabCD91JPeaDSfGY447w4qMkXxIfm20Hn6Exqw-vlcpAoYLvnVWwr501q0AZI3xk~62z1ISPt6o-xRLkSedByT45gPupQylxQbsD9PKVhfnol~F6WvMDfE80eMhv5uT5WpcbcVaGBr2QFWlZKqYx2ldB23YsTvMXxQIUtnMieyzVEkBHMkDLCLGjl~TdjdD2TTz4Kvh5~2UL5XAUUXS~w__" />
 {/* <img class="overlay-image" src="https://i.pinimg.com/originals/c3/b2/df/c3b2dff7986e701847f213423683f00a.png" alt="Overlay Image"></img>
  */}<div class="text-overlay">Medical</div>
  </div>
  <div class="box">
  <img class="image" src= "https://s3-alpha-sig.figma.com/img/03e0/b6c0/16fc4285b871a29395daaee80a5c1c4b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TmZQWLjKV5eV8SBorh1dopN1mZDVQ2Z98l4A6MzE0bemHwmMwlNozKN~wYbidyOzthh2g5cMT3H4oFx8f52-z3zgIybp54rRKMhcgCwAs2hCA7zdy87QfQHCW5co53MHS9uZbQraoLgntXqfjwxdy3MdhjgiKs6UBBrcCz76gXFJKulEVInMUrv3HoUkEAZlRQ3CRWfzsPyLniAbG7v4XVPZVpjHtjpyAFpUXKQuGotWT5vwcz3wz8iL15wGMktAkqtLf6V1kjCbxCin4~r9SgbdQU-E7Wb0C5tkdtV2WC~exSMSuls7w3YmNOy2hpu5xtwOJOAnBUX4zeqVj2hXfQ__" />
  <div class="text-overlay">Environmental</div>
  </div>
  <div class="box">
  <img class="image" src= "https://s3-alpha-sig.figma.com/img/8117/1e5f/a66c9b768881afb4e1634c3867c987c5?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dRNGI2~hkbpYVHh~S8sp9OmZSFbhd81MYvnRJ6R4P2bXkLZCcnHL3Htp2yF94MxCd3xKwiJWgjZAElpMHufrtzc7s~LgJEfvSTO~b7Itf0OtlAMFN0cY--2Y33oTaQD4WYiTR9pBcnO3~~wZ-6tGtM-ZLrBcfJTsWWHBSam6lzY~eGvcKsL7N-~aGPSW4I546bjbcdDT6aCalVk0LoOPw~7haLcP3wt1nhg-dYiou21daiBkVaBztNmyMklIAcNHQXNLqgo13FHnpU1qQB4J1Bmx9jvk6IjKsUoOIR1WpK4YUCGm3GtSJHjKRYA6woJMrMBVIP0KNQ-Wme8xz85NIg__" />
  <div class="text-overlay">Educational</div>
  </div>
  </div>
    </div>
    </>
  );
}

export default Home