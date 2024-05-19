import React from "react";
import "./Add.scss";

import Input from "components/Input";
import Header from "components/Header";
import Footer from "components/Footer";

const Add = () =>{
   return (
       <div className="add_overall">
           <Header />
           <Input />
           <Footer />
       </div>
   )
}

export default Add;