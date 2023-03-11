import { BsSearch } from 'react-icons/bs'

const Search = () => {

  return (
    <>
      <div>
        <form autoComplete='off'>
          <button>
            <BsSearch />
          </button>
          <input typeof='text' placeholder=' Busca'/>
        </form>
      </div>
    </>
  )
}

export default Search
