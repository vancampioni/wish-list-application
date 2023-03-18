export type ProductProps = {
    id: number,
    image_url: string,
    title: string,
    price: number,
    top_product: "favorite" | "delete",
    addProductToWishList?: (id: number) => void
    removeProductToTheWishList?: (id: number) => void
}