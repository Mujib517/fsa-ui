const ProductList = () => {
    const products = [
        { id: 1, brand: 'Apple', model: 'Iphone 13', price: 1000 },
        { id: 2, brand: 'Apple', model: 'Iphone 12', price: 900 },
        { id: 3, brand: 'Apple', model: 'Iphone 12 Max', price: 1200 }
    ];

    return <div>
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => {
                    return <tr>
                        <td>{product.id}</td>
                        <td>{product.brand}</td>
                        <td>{product.model}</td>
                        <td>{product.price}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}

export default ProductList;
