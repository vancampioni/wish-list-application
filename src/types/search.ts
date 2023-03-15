import { Dispatch, SetStateAction } from 'react';
import { ProductProps } from './product';

export type SearchProps = {
    search: string
    setSearch: Dispatch<SetStateAction<string>>
}