import IfElse from "./utils/IfElse";
import ShouldRender from "./utils/ShouldRender";

// const CartButton = ({ product, onAddClick }) => product.inStock ?
//     <button disabled={!product.inStock} className="btn btn-danger btn-sm" onClick={onAddClick}>
//         Add to cart
//         <i className="fa fa-shopping-cart"></i>
//     </button> : null


const CartButton = ({ product, onAddClick }) => product.inStock &&
    <button disabled={!product.inStock} className="btn btn-danger btn-sm" onClick={onAddClick}>
        Add to cart
        <i className="fa fa-shopping-cart"></i>
    </button>

// presentation component
const ProductItem = ({ product, onAdd }) => {

    const onAddClick = () => {
        onAdd(product);
    }

    return <div className="col-md-3">
        <div style={{ margin: '20px' }} className="card">
            <div className="card-header">
                <span className="card-title">{product.brand} {product.model}</span>
            </div>
            <img className="card-img-top" src={product.img} />
            <div className="card-body">
                <hr />
                <b>$ {product.price}</b>
                <hr />
                <h6>
                    <label>In stock?</label>
                    <input disabled type="checkbox" checked={product.inStock} />
                </h6>
            </div>
            <div className="card-footer">
                <IfElse cond={product.inStock}>
                    <button className="btn btn-danger btn-sm" onClick={onAddClick}>
                        Add to cart
                        <i className="fa fa-shopping-cart"></i>
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={onAddClick}>
                        Notify
                        <i className="fa fa-bell"></i>
                    </button>
                </IfElse>
            </div>
        </div>
    </div>
}

export default ProductItem;
