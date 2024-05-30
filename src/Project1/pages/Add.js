import React from "react";
import "./Add.scss";

import Input from "Project1/components/Input";
import Header from "Project1/components/Header";
import Footer from "Project1/components/Footer";

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