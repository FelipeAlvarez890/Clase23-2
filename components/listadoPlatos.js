'use client';

import { traerPlatos } from "@/api/api";
import { useEffect, useState } from "react";
import { BarraBusqueda } from "../components/busqueda";

export function ListadoDePlatos() {
      const [platos, setPlatos] = useState([]);
      
      const [query, setQuery] = useState("");
      const [category, setCategory] = useState("");
      const [city, setCity] = useState("");
      const [localId, setLocalId] = useState("");

  useEffect(() => {
    const mostrarPlatos = async () => {
      const data = await traerPlatos(query, category, city, localId);
      console.log(data);
      console.log(data.items);
      setPlatos(data.items);
    };
    mostrarPlatos();
  }, [query, category, city, localId]);

  return (
    <>
    <BarraBusqueda setQuery={setQuery} setCategory={setCategory} setCity={setCity} setLocalId={setLocalId} />
      {platos.map((plato) => (
        <div key={plato.id}>
          <h2>{plato.name}</h2>
          <p>Categoria: {plato.category}</p>
          <p>Ciudad: {plato.city}</p>       
          <p>Descripcion: {plato.description}</p>
          <p>Precio: ${plato.price}</p>
          <br></br>
        </div>        
      ))}
    </>
  );
}

export default ListadoDePlatos;