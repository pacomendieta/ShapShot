import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";
import Nota from "./Nota";

const Container = ({ searchTerm }) => {
  const { images, loading, runSearch } = useContext(PhotoContext);
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);
  const nota1 = {content:"Contenido Nota 1", important:true}
  const nota2 = {content:"Contenido Nota 2", important:false}
  const nota3 = {content:"Contenido Nota 3", important:true }
  return (
    <div className = "main-container">
      <div className="photo-container">
        <h2>Fotos</h2>
        {loading ? <Loader /> : <Gallery data={images} />}
      </div>
      <div className="=notas-container">
        <h2>Notas</h2> 
          <Nota nota={nota1} handleClick={()=>{console.log("click1")}} />
          <Nota nota={nota2} />
          <Nota nota={nota3} />
      </div>
    </div>
  );
};

export default Container;
