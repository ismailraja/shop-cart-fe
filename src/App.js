// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Menu from "./NavigationMenu.js";
import UserCreate from "./Component/User/UserCreate.js";
import UserRead from "./Component/User/UserRead.js";
import UserDelete from "./Component/User/UserDelete.js";
import UserEdit from "./Component/User/UserEdit.js";
import ProductList from "./Component/Product/ProductList.js";
import ProductEdit from "./Component/Product/ProductEdit.js";
import ProductDelete from "./Component/Product/ProductDelete.js";
import ProductCreate from "./Component/Product/ProductCreate.js";
import ProductChange from "./Component/Product/ProductChange.js";
import UserLogin from "./Component/User/UserLogin.js";
import CartList from "./Component/Cart/CartList.js";
import ShoppingCart from "./Component/Cart/ShopingCart.js";

function AppSeclogin() {
  return (
    <div>
      <h1>QDine Admin Portal </h1> {/* Add the project title here */}
      <Menu />
      <Routes>
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/usercreate" element={<UserCreate />} />
        <Route path="/userread" element={<UserRead />} />
        <Route path="/userdelete/:id" element={<UserDelete />} />
        <Route path="/useredit/:id" element={<UserEdit />} />
        <Route path="/productcreate" element={<ProductCreate />} />
        <Route path="/productchange" element={<ProductChange />} />

        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productedit/:id" element={<ProductEdit />} />
        <Route path="/productdelete/:id" element={<ProductDelete />} />

        <Route path="/cartlist" element={<CartList />} />
        <Route path="/cartadd" element={<ShoppingCart />} />
        {/* Define Edit route */}
      </Routes>
    </div>
  );
}

export default AppSeclogin;
