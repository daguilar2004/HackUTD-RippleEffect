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
    
      <div className="flex flex-row w--full gap-0">
        <div id="content" className="p-6 w-full bg-neutral-400 rounded-xl">
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-left"><b>Home Feed</b></h1>
            <p className="text-left">See the latest post from organizations!</p>
          </div>
          <div className="flex flex-wrap gap-8 my-8 w-full">

          </div>
        </div>
    </div>
    </div>
    </>
  );
}

export default Home