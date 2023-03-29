import React from "react";
import CustomeButton from "./CustomeButton";
import "./styles/ContainerInfo.css";
import "./styles/CustomeButton.css";

const Containerinfo = ({ quote, handleNewQuote }) => {
  return (
    <div>
      <section className="containerInfo">
        <h1 className="containerInfo__tittle">Info Gallaxy</h1>

        <article className="containerInfo__phrase">
          <p>{quote.phrase}</p>
          <CustomeButton handleNewQuote={handleNewQuote} />
        </article>

        <article className="containerInfo__author">
          <h4>Fuente: {quote.author} </h4>
          
        </article>
        
      </section>
    </div>
  );
};

export default Containerinfo;
