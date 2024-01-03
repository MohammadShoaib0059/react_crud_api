import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalGetApi } from "../ContextApi/GetApi";

const PostEmployee = () => {
  const Data = useContext(GlobalGetApi);
  const [newData, setNewdata] = useState([])
    // let navigate = useNavigate();
   
    
  const formik = useFormik({
    initialValues: {
      id: 0,
      title: "",
      image: "https://i.gadgets360cdn.com/large/vivo_v25_5g_vivo_1663226604291.jpg",
      price: 0,
    },
    onSubmit: (values) => {
      axios({
        method: "POST",
        url: "https://fakestoreapi.com/products",
        data: values
      }).then((response)=>{
        setNewdata([...Data,response.data]);
        console.log(newData);
      })
      alert("Product Added")
      // navigate("/")
    }
  });

  return (
 <>
  <div className="container d-flex justify-content-center align-items-center mt-4">
      <div className="form-data p-4">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Product title</label>
            <input type="text" className="form-control" id="title" name="title" onChange={formik.handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Product Image</label>
            <input type="file" className="form-control" name="image" onChange={(event) => formik.setFieldValue("image", event.currentTarget.files[0])} />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Product Price</label>
            <input type="text" className="form-control" id="price" name="price" onChange={formik.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
    <div className="New_data">
    {
                newData.map(item => (
                    <div className="card-data m-2">
                        <div className="card">
                            <div className="card-img-top mt-2">
                                <img src={item.image} id="img" alt="Card image cap" />
                            </div>
                            <div className="card-body">
                                <p className="card-text text-center">{item.title}</p>
                                <h5 className="mt-2">Price : ${item.price}</h5>
                            </div>
                            {/* <div className="card-footer d-flex justify-content-between">
                                <Link to={`/Post/` + item.id} className="btn btn-warning">Edit</Link>
                                <button className="btn btn-danger">Delete</button>
                            </div> */}
                        </div>
                    </div>

                ))
            }
    </div>
 </>
  );
}

export default PostEmployee;