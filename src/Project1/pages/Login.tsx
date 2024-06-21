import React from "react";
import "./Login.scss";

import Header from "Project1/components/Header";
import Footer from "Project1/components/Footer";
import LoginForm from "Project1/components/LoginForm";

const Login: React.FC = () =>{
    return (
        <div>
            <Header />
            <LoginForm />
            <Footer />
        </div>
    )
}

export default Login;