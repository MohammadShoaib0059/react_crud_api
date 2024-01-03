import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalGetApi } from "../ContextApi/GetApi";
import { GlobalPostApi } from "../ContextApi/PostApi";
const GetEmployee = () => {
    const result = useContext(GlobalGetApi);
    // const {updateData} = useContext(GlobalPostApi);
    return (
        <div className="container-data p-2">
            {
                result.map(item => (
                    <div className="card-data m-2">
                        <div className="card">
                            <div className="card-img-top mt-2">
                                <img src={item.image} id="img" alt="Card image cap" />
                            </div>
                            <div className="card-body">
                                <p className="card-text text-center">{item.title}</p>
                                <h5 className="mt-2">Price : ${item.price}</h5>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <Link to={`/Post/` + item.id} className="btn btn-warning">Edit</Link>
                                <button className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
    );
}

export default GetEmployee;