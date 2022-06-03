const SearchForm = () => {
  return (
    <div className="container mx-auto px-4 h-44">
      <div className="w-full h-full relative">
        <picture className="absolute inset-0 object-cover">
          <source
            srcset={
              new URL(
                '../assets/images/building-background-webp.webp',
                import.meta.url
              ).href
            }
            type="image/webp"
          />
          <source
            srcset={
              new URL(
                '../assets/images/building-background-jpg.jpg',
                import.meta.url
              ).href
            }
            type="image/jpeg"
          />
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={
              new URL(
                '../assets/images/building-background-jpg.jpg',
                import.meta.url
              ).href
            }
            alt="Alt Text!"
          />
        </picture>
      </div>
      <div className="flex items-center justify-center ">
        <form className="max-w-6xl mx-auto"></form>
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <main>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl text-black">
          <strong>Github</strong> Jobs
        </h1>
      </div>

      <SearchForm />
    </main>
  )
}

export default Home
