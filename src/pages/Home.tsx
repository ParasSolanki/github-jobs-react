import { FunctionalComponent } from 'preact'
import { StateUpdater, useState } from 'preact/hooks'

interface SearchFormProps {
  searchTerm: string
  setSearchTerm: StateUpdater<string>
}

const SearchForm: FunctionalComponent<SearchFormProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="container mx-auto px-4 h-44 flex items-center justify-center search-container">
      <form className="max-w-4xl w-full mx-auto flex items-center justify-center space-x-3 sm:space-x-5">
        <input
          type="search"
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.currentTarget.value)}
          className="py-3 px-3 w-full bg-white text-base text-slate-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <button
          type="submit"
          className="py-3 px-5 text-base bg-blue-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
        >
          Search
        </button>
      </form>
    </div>
  )
}

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <main>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl text-black">
          <strong>Github</strong> Jobs
        </h1>
      </div>

      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </main>
  )
}

export default Home
