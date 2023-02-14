import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/header/Header"; 
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Header />
        <Main />
        <Footer />
    </React.StrictMode>
)