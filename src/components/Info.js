import React from "react";
import "./Info.scss";

const Info = () => {
    return (
        <div className="info_overall">
            <table className="info_table" cellpadding="10">
                <tr className="info_line">
                    <td>id</td>
                    <td>1</td>
                </tr>
                <tr className="info_line">
                    <td>name</td>
                    <td>Jame</td>
                </tr>
                <tr className="info_line">
                    <td>sex</td>
                    <td>male</td>
                </tr>
                <tr className="info_line">
                    <td>email</td>
                    <td>Jame@gmail.com</td>
                </tr>

            </table>
            <button className="info_button">back to main</button>
        </div>
    )
}

export default Info;
