import { BsSearch } from 'react-icons/bs'

import * as S from '../styles/Search';

const Search = () => {

  return (
    <>
      <S.Search__Container>
          <S.Search__Button>
            <BsSearch />
          </S.Search__Button>
          <input typeof='text' placeholder=' Busca'/>
        </S.Search__Container>
    </>
  )
}

export default Search
