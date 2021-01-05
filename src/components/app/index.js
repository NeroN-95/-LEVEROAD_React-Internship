import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import firebase from "firebase";
import Products from "../products/products";
import AddProducts from "../add-products/add-products";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import EditorProducts from "../product-editor/product-editor";
import {getProducts} from "../../actions";

const firebaseConfig = {
    apiKey: "AIzaSyD7SjtA9u7NnWp7oJLp3_d2dCqG3pdgaDQ",
    authDomain: "shop-8cc17.firebaseapp.com",
    databaseURL: "https://shop-8cc17-default-rtdb.firebaseio.com",
    projectId: "shop-8cc17",
    storageBucket: "shop-8cc17.appspot.com",
    messagingSenderId: "171206939979",
    appId: "1:171206939979:web:6173257a1861c2d72904ce",
    measurementId: "G-ZJNXVGJ5N1"
};
firebase.initializeApp(firebaseConfig);

export const database = firebase.database().ref().child('0').child('products');

const App = (props) => {
    const {products, getProducts, isLoading} = props;
    const [idProduct, setIdProduct] = useState(null);

    useEffect(() => {
        database.on('value', snap => {
            getProducts(snap.val());
        });
    }, [idProduct]);

    return (
        <div className="App">
            {
                !isLoading && (
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" exact>
                                <Products products={products}/>
                            </Route>
                            <Route path="/products/" exact>
                                <Products products={products}/>
                            </Route>
                            <Route path="/add/">
                                <AddProducts/>
                            </Route>
                            <Route exact path="/product/:idItem">
                                <EditorProducts idProduct={idProduct}/>
                            </Route>
                        </Switch>
                    </BrowserRouter>
                )
            }
        </div>);
}

const mapStateToProps = (state) => ({
    products: state.shop.products,
    isLoading: state.shop.isLoading
});
const mapDispatchToProps = {
    getProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
