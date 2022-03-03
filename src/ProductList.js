import ProductItem from "./ProductItem";

// container 
const ProductList = () => {
    const cart = [];

    const onAddCartClick = (product) => {
        cart.push(product);
        console.log(cart);
    }

    const products = [
        { id: 1, brand: 'Apple', model: 'Iphone 13', inStock: true, price: 1000, img: 'https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg' },
        { id: 2, brand: 'Apple', model: 'Iphone 12', inStock: false, price: 900, img: 'https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/i/p/iphone-12-pro-blue-hero_1_5.png' },
        { id: 3, brand: 'Apple', model: 'Iphone 12 Pro', inStock: true, price: 1200, img: 'https://m.media-amazon.com/images/I/71XXJC7V8tL.jpg' }
    ];

    return <div>
        {products.map(item => <ProductItem key={item.id} product={item} onAdd={onAddCartClick} />)}
    </div>
}

export default ProductList;
