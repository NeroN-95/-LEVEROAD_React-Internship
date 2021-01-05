import React from "react";
import style from "./product_item.module.css";
import {Link, useParams} from "react-router-dom";
import {getIdProduct} from "../../../actions";
import {connect} from "react-redux";


const ProductItem = (props) => {
    const {item, id} = props;
    return (
        <div className={style.product_main}>
            <div className={style.Product}>
                <div className={style.main}>

                    <div className={style.ProductImage}>
                        <img src={item.image}/>
                    </div>
                    <div className={style.ProductDescription}>
                        <p>{item.name}</p>
                        <p>price : {item.price}</p>
                        <p>discount : {item.discount}</p>

                    </div>
                    <div className={style.btn}>
                        <button className={style.btnItems}><Link to={`/product/${id}`}> Редактировать</Link></button>
                        <button className={style.btnItems}><Link to="/add/"> Добавить Товар </Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => ({
    idProduct: state.shop.idProduct
});
const mapDispatchToProps = {
    getIdProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
