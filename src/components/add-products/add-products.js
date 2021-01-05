import React from "react";
import style from "./add-products.module.css";
import {Link} from "react-router-dom";
import {useState} from 'react';
import {database} from "../app";


const AddProducts = () => {
    const [products, addProducts] = useState({
        "id": '2',
        "name": "",
        "price": 0,
        "discount": 0,
        "image": "",
        "discount_day": ''
    });

    const handleInputChange = (e, type) => {
        addProducts({
            ...products,
            [type]: e.target.value
        });
    }


    const handleAddProducts = (e) => {
        e.preventDefault();
        database.push(products);
    }
    return (
        <div className={style.AddProduct}>
            <form onSubmit={handleAddProducts}>
                <div className={style.name}>
                    <p>Name</p>
                    <input minLength="20" maxLength="60" type="text" onChange={(e) => {
                        handleInputChange(e, 'name');
                    }} value={products.name}/>
                </div>
                <div className={style.price}>
                    <p>price</p>
                    <input maxLength="99999999.99"  type="text" onChange={(e) => {
                        handleInputChange(e, 'price');
                    }} value={products.price}/>
                </div>

                <div className={style.discount_day}>
                    <p>discount_day</p>
                    <input type="text" onChange={(e) => {
                        handleInputChange(e, 'discount_day');
                    }} value={products.discount_day}/>
                </div>

                <div className={style.discount}>
                    <p>discount</p>
                    <input type="text" onChange={(e) => {
                        handleInputChange(e, 'discount');
                    }} value={products.discount}/>
                </div>
                <div className={style.image}>
                    <p>image</p>
                    <input type="text" onChange={(e) => {
                        handleInputChange(e, 'image');
                    }}/>
                </div>
                <div className={style.save}>
                    <input type="submit" value="save"/>
                </div>
                <div className={style.return}>
                    <button><Link to="/products/"> cancel</Link></button>
                </div>
            </form>
        </div>

    )
}

export default AddProducts;

