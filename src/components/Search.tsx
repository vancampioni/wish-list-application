import { useEffect, useLayoutEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs'
import { SearchProps } from "../types/search";

import * as S from '../styles/Search';

const Search = ({setSearch, search}: SearchProps) => {

  return (
    <>
      <S.Search__Container>
          <S.Search__Button>
            <BsSearch />
          </S.Search__Button>
          <input 
          typeof='text' 
          placeholder=' Busca'
          value={search}
          onChange={(e) => setSearch(e.target.value) } 
          />
        </S.Search__Container>
    </>
  )
}

export default Search
