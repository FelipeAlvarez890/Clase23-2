export const BarraBusqueda = ({ setQuery, setCategory, setDateFrom, setDateTo, setCity, setLocalId }) => {
    return (
        <div>
            <input id="query" name="query" type="text" placeholder="Buscar..." onChange={(e) => setQuery(e.target.value)} />

            <select>
            <input 
            id="category" 
            name="category" 
            type="text" 
            placeholder="Categoria..." 
            onChange={(e) => setCategory(e.target.value)}/>

            <option value={"Cafe"}>Café</option>
            </select>


            <input id="city" name="city" type="text" placeholder="Ciudad..." onChange={(e) => setCity(e.target.value)} />

            <input id="localId" name="localId" type="text" placeholder="Local ID..." onChange={(e) => setLocalId(e.target.value)} />
        </div>
    );
}

export default BarraBusqueda;