import axios from "axios";
import { useState } from "react";

const Dummmy = () => {
    const [Data, setData] = useState([
     {
        title: "",
        image: "https://i.gadgets360cdn.com/large/vivo_v25_5g_vivo_1663226604291.jpg",
        price: 0
     }
    ]);
    function handleChange(e){
        e.preventDefault();
        setData({...Data, [e.target.name]:e.target.value});
    }
    
    function handleSubmit(e){
        e.preventDefault();
        axios({
            method : "POST",
            url : "https://fakestoreapi.com/products",
        }).then((response) =>{
            console.log(response.data);
            setData(response.data);
        })
    }
 
    return ( 
        <div className="container d-flex justify-content-center align-items-center mt-4">
      <div className="form-data p-4">
        <form >
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Product title</label>
            <input type="text" className="form-control" id="title" name="title" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Product Image</label>
            <input type="file" className="form-control" name="image" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Product Price</label>
            <input type="text" className="form-control" id="price" name="price" onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>{/* {editedData !== null ? "Update" : "Submit"} */}Submit</button>
        </form>
      </div>
    </div>

     );
}
 
export default Dummmy;