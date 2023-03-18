import { createContext, ReactNode, useState } from 'react'
import { ProductProps } from '../../types/product'

export type ProductContextType = {
    id: ProductProps,
    image_url: ProductProps,
    title: ProductProps,
    price: ProductProps,
    top_product: ProductProps
    addProductToWishList?: (id: number) => void
    removeProductToTheWishList?: (id: number) => void
}

export const ProductContext = createContext<ProductContextType>(null!);