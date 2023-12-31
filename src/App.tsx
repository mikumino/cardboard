import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ImageDisplay from './components/PostMasonryDisplay'

function App() {
  const [search, setSearch] = useState('')
  const handleSearch = (search: string) => {
        setSearch(search)
    }
  
    return (
    <>
        <div className='flex flex-col xl:flex-row'>
            <div className='flex flex-col mx-auto w-screen xl:mx-0 xl:min-w-[30rem] xl:max-w-[30rem] p-6 xl:min-h-screen xl:bg-mino-dark-700'>
                <h1 className='mx-auto xl:mx-0 text-4xl font-bold text-mino-blue-500 mb-6'>Cardboard</h1>
                <SearchBar onSearch={handleSearch} />
            </div>
            <div className='mx-auto mt-6'>
                <ImageDisplay search={search} />
            </div>
        </div>
    </>
  )
}

export default App
