import { createContext, ReactNode, useState } from 'react'
import { ProductProps } from '../types/product'
// import { ProductProps } from '../types/product'

// type ProductContextProps = {
//     children: ReactNode
// }

// type ProductContextType = {
//     product: ProductProps;
//     setProducts: ProductProps;
// }

// const initialValue = {
//     product: [],
//     setProducts: []
// }

// export const ProductContext = createContext<ProductContextType>(initialValue);

// export const ProductContextProvider = ({ children }: ProductContextProps) => {
//     const [products, setProducts] = useState(initialValue);

//     return (
//         <ProductContextProvider value={{ products, setProducts}}>
//             {children}
//         </ProductContextProvider>
//     )
// }

// export const ProductContext = createContext()

// export const ProductProvider = ({children}: ProductProps) => {
//     const [products, setProducts] = useState()
//     const [loading, setLoading] = useState(true)

//     const loadProducts = async () => {
//         await fetch(
//           "https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e/0"
//         )
//           .then((response) => response.json())
//           .then((data) => {
//             setProducts(data.products);
//             setLoading(false);
//           });
//       };

//     return (
//         <ProductContext.Provider>{children}</ProductContext.Provider>
//     )
// }