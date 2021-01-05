import React from 'react';
import ProductItem from "./product/product_item";
import style from './products.module.css';

const Products = (props) => {
    const {products, setIdProduct} = props;
    let oldProducts = [];

    const renderProductItem = () => {
        for (let key in products) {
            oldProducts.push(products[key])
        }
        return oldProducts.map((product) => {
            return <ProductItem item={product}
                                key={product.id}
                                id={product.id}
                                setIdProduct={setIdProduct}
                                  product={product}/>
        })
    }

    return (
        <div className={style.container}>
            <ul className={style.product__main}>
                <li className={style.Product}>
                    {
                        renderProductItem()
                    }
                </li>
            </ul>
        </div>
    );
}

export default Products;
