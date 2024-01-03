import axios from "axios";
import { useFormik } from "formik";
import { createContext, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalGetApi } from "./GetApi";

export const GlobalPostApi = createContext();
const PostApi = ({ children }) => {
  
    return ( 
        <GlobalPostApi.Provider>
           { children }
        </GlobalPostApi.Provider>
     );
}
 
export default PostApi;