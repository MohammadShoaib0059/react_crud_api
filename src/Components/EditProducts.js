import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Editproducts = () => {
    const [Editdata, SetEditdata] =useState([{
        // title: "",
        // image: "",
        // price :0
    }]);
    const param = useParams();
    useEffect(()=>{
        axios({
            method : "GET",
            url : `https://fakestoreapi.com/products/${param.id}`
        }).then((response) =>{
            SetEditdata(response.data)
            console.log(Editdata)
        })
    },[])
function handleTitleChange(e){
    e.preventDefault();
    SetEditdata({
        "title": e.target.value
    })
}
function handleImageChange(e){
    e.preventDefault();
    SetEditdata({
        "image": e.target.file[0]
    })
}
function handlePriceChange(e){
    e.preventDefault();
    SetEditdata({
        "price": e.target.value
    })
}
function handleSubmit(e){
    e.preventDefault();
    axios({
        method: "PUT",
        url : (`https://fakestoreapi.com/products/${Editdata.id}`,Editdata)
    })
 
}

    
    return ( 
        <div className="container d-flex justify-content-center align-items-center mt-4">
        <div className="form-data p-4">
          <form >
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Product title</label>
              <input type="text" className="form-control" id="title" name="title" value={Editdata[0].title} onChange={e=>{handleTitleChange(e)}} />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Product Image</label>
              <input type="file" className="form-control" name="image" value={Editdata[0].image} onChange={e=>{handleImageChange(e)}} />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Product Price</label>
              <input type="text" className="form-control" id="price" name="price" value={Editdata[0].price} onChange={e=>{handlePriceChange(e)}} />
            </div>
            <button type="submit" className="btn btn-primary w-100" onClick={e=>{handleSubmit(e)}}>{/* {editedData !== null ? "Update" : "Submit"} */}Update</button>
          </form>
        </div>
      </div>
     );
}
 
export default Editproducts;