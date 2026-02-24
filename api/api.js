import { Content } from "next/font/google";

const URL_BASE = "https://api-react-taller-production.up.railway.app/";

const traerPlatos = async (q= "", category= "", city= "", localId= "") => {
    const data = await fetch(`${URL_BASE}api/dishes?q=${q}&category=${category}&city=${city}&localId=${localId}`).then((res) => res.json());

    return data;
}

const crearPlato = async (name, category, localId, city, price, description) => {
    const response = await fetch(`${URL_BASE}api/dishes`, {
        method: "POST",
        headers: {"Content-Type" : "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}`},

        body: JSON.stringify({
            name,
            category,
            localId,
            city,
            price,
            description
        })
    });

    const data = await response.json();
    
    console.log("Datos de registro", data);
}


export { 
    traerPlatos,
    crearPlato,
};