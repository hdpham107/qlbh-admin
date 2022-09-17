import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Table from "./components/TableComponent";
import "./style.scss";

export default function App() {
  return (
    <div>
      <Header/>
      <Table/>
      <Footer/>
    </div>
  );
}
