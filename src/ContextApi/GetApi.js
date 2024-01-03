import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const GlobalGetApi = createContext();
const GetApi = ({ children }) => {
    const [Data, setData] = useState([]);
    useEffect(() => {
        axios({
            method: "GET",
            url: "https://fakestoreapi.com/products"
        })
            .then((response) => {
                setData(response.data)
            })
    }, []);
    return (
        <GlobalGetApi.Provider value={Data}>
            {children}
        </GlobalGetApi.Provider>
    );
}

export default GetApi;