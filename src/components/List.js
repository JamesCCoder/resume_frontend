import React from "react";
import "./List.scss";

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
                   <button className="list_detail">detail</button>
                   <button className="list_edit">edit</button>
                   <button className="list_delete">delete</button>
               </tr>
               <tr>
                   <td>2</td>
                   <td>Justin</td>
                   <td>male</td>
                   <td>justin@gmail.com</td>
                   <button>detail</button>
                   <button>edit</button>
                   <button>delete</button>
               </tr>
           </table>
       </div>
   )
}

export default List;