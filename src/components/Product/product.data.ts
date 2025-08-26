export interface Product{
    id:number,
    name:string,
    image:string,
    price:number,
    quantity:number
}

export interface Cart{
    productId:number,
    productName:string,
    productImage:string,
    productPrice:number,
    productInCartQuantity:number
}

export const products:Product[] = [
    {
        id:1,
        name:`Điện thoại samsung galaxy`,
        image: `https://cdn2.cellphones.com.vn/x/media/catalog/product/v/n/vn_iphone_15_yellow_pdp_image_position-1a_yellow_color_1_4_1_1.jpg`,
        price:20000000,
        quantity:5
    },
    {
        id:2,
        name:`Điện thoại iphone`,
        image: `https://cdn2.cellphones.com.vn/x/media/catalog/product/v/n/vn_iphone_15_yellow_pdp_image_position-1a_yellow_color_1_4_1_1.jpg`,
        price:20000000,
        quantity:5
    },
    {
        id:3,
        name:`Điện thoại vivo`,
        image: `https://cdn2.cellphones.com.vn/x/media/catalog/product/v/n/vn_iphone_15_yellow_pdp_image_position-1a_yellow_color_1_4_1_1.jpg`,
        price:20000000,
        quantity:5
    },
    {
        id:4,
        name:`Điện thoại oppo`,
        image: `https://cdn2.cellphones.com.vn/x/media/catalog/product/v/n/vn_iphone_15_yellow_pdp_image_position-1a_yellow_color_1_4_1_1.jpg`,
        price:20000000,
        quantity:5
    },
    {
        id:5,
        name:`Điện thoại 1`,
        image: `https://cdn2.cellphones.com.vn/x/media/catalog/product/v/n/vn_iphone_15_yellow_pdp_image_position-1a_yellow_color_1_4_1_1.jpg`,
        price:20000000,
        quantity:5
    },
    {
        id:6,
        name:`Điện thoại 2`,
        image: `https://cdn2.cellphones.com.vn/x/media/catalog/product/v/n/vn_iphone_15_yellow_pdp_image_position-1a_yellow_color_1_4_1_1.jpg`,
        price:20000000,
        quantity:5
    },
    {
        id:7,
        name:`Điện thoại 3`,
        image: `https://cdn2.cellphones.com.vn/x/media/catalog/product/v/n/vn_iphone_15_yellow_pdp_image_position-1a_yellow_color_1_4_1_1.jpg`,
        price:20000000,
        quantity:5
    },
    {
        id:8,
        name:`Điện thoại 4`,
        image: `https://cdn2.cellphones.com.vn/x/media/catalog/product/v/n/vn_iphone_15_yellow_pdp_image_position-1a_yellow_color_1_4_1_1.jpg`,
        price:20000000,
        quantity:5
    }
]