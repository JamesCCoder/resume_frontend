import React from "react";
import "./List.scss";

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const List = () =>{
   return (
       <div className="list_overall">
           <table className="list_table">
               <tr>
                   <td>id</td>
                   <td>name</td>
                   <td>sex</td>
                   <td>email</td>
               </tr>
               <tr>
                   <td>1</td>
                   <td>James</td>
                   <td>male</td>
                   <td>james@gmail.com</td>
                   <Link to = "/project1/detail" className="list_detail">detail</Link>
                   <Link to = "/project1/add" className="list_edit">edit</Link>
                   <button className="list_delete">delete</button>
               </tr>   
           </table>          
            <Link to = "/project1/add" className="list_button_add">add</Link>           
       </div>
   )
}

export default List;