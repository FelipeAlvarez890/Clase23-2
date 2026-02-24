'use client';

import { ListadoDePlatos } from "../components/listadoPlatos";
import { useState, useEffect } from "react";
import { crearPlato } from "@/api/api";


export default function Home() {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [localId, setLocalId] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <h1>Listado de Platos</h1>
      <ListadoDePlatos />

      <input 
      id="name" 
      name="name" 
      type="text" 
      placeholder="Nombre..." 
      onChange={(e) => setName(e.target.value)}/>

      <input 
      id="category" 
      name="category" 
      type="text" 
      placeholder="Categoria..." 
      onChange={(e) => setCategory(e.target.value)}/>

      <input 
      id="localId" 
      name="localId" 
      type="text" 
      placeholder="Local ID..." 
      onChange={(e) => setLocalId(e.target.value)}/>

      <input 
      id="city" 
      name="city" 
      type="text" 
      placeholder="Ciudad..." 
      onChange={(e) => setCity(e.target.value)}/>

      <input 
      id="price" 
      name="price" 
      type="text" 
      placeholder="Precio..." 
      onChange={(e) => setPrice(e.target.value)}/>

      <input 
      id="description" 
      name="description" 
      type="text" 
      placeholder="Descripción..." 
      onChange={(e) => setDescription(e.target.value)}/>


    <button onClick={() => crearPlato(name, category, localId, city, price, description)}>Crear Plato</button>
    </>
  );
}
