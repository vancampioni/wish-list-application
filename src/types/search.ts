import { Dispatch, SetStateAction } from 'react';

export type SearchProps = {
    search: string,
    setSearch: Dispatch<SetStateAction<string>>
}