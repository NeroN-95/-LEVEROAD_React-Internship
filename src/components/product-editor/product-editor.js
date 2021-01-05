import React, {useState} from "react";
import style from "./product-editor.module.css";
import {Link, withRouter} from "react-router-dom";
import { editProductSave } from "../../actions";
import {connect} from "react-redux";
import {database} from "../app";

const EditorProducts = (props) => {
    const {match, location, history, editProductSave} = props;
    const [editProduct, setChangedProduct] = useState({
        "name": "",
        "price": 0,
        "discount": 0,
        "image": "",
        "discount_day": ''
    });

    console.log('-- match --', match.params.idItem);
    console.log('-- location --', location);
    console.log('-- history --', history);

    const handleInput = (e, type) => {
        setChangedProduct({
            ...editProduct,
            [type]: e.target.value
        });
    }


    const handleAddProducts = (e) => {
        e.preventDefault();
        editProductSave(match.params.idItem, editProduct)
        // dispatch actions
        database().ref().update(handleInput);
    }

    return (
        <div className={style.AddProduct}>
                <form onSubmit={handleAddProducts}>
                    <div className={style.name}>
                        <p>Name</p>
                        <input type="text" onChange={(e) => {
                            handleInput(e, 'name');
                        }} value={editProduct.name}/>
                    </div>
                    <div className={style.price}>
                        <p>price</p>
                        <input type="text" onChange={(e) => {
                            handleInput(e, 'price');
                        }} value={editProduct.price}/>
                    </div>

                    <div className={style.discount_day}>
                        <p>discount_day</p>
                        <input type="text" onChange={(e) => {
                            handleInput(e, 'discount_day');
                        }} value={editProduct.discount_day}/>
                    </div>

                    <div className={style.discount}>
                        <p>discount</p>
                        <input type="text" onChange={(e) => {
                            handleInput(e, 'discount');
                        }} value={editProduct.discount}/>
                    </div>
                    <div className={style.image}>
                        <p>image</p>
                        <input type="text" onChange={(e) => {
                            handleInput(e, 'image');
                        }}/>
                    </div>
                    <div className={style.save}>
                        <input type="submit" value="save"/>
                    </div>
                    <div className={style.cancel}>
                        <button><Link to="/products/"> cancel</Link></button>
                    </div>
                </form>

        </div>
    )
}

const mapDispatchToProps = {
    editProductSave
}

export default connect(null, mapDispatchToProps)(withRouter(EditorProducts))
