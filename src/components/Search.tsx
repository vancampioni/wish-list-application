import { BsSearch } from 'react-icons/bs'

import * as S from '../styles/Search';

const Search = () => {

  return (
    <>
      <S.Container>
          <S.Button>
            <BsSearch />
          </S.Button>
          <input typeof='text' placeholder=' Busca' className='search'/>
        </S.Container>
    </>
  )
}

export default Search
