import React, {useEffect, useState} from "react";
import {isCursorAtEnd} from "@testing-library/user-event/dist/utils";

export function Products()
{
    const [content,setContent]= useState(<ProductList showForm={showForm}/>);

    function showList()
    {
        setContent(<ProductList showForm={showForm}/>);
    }

    function showForm()
    {
        setContent(<ProductForm showList={showList}/>);
    }

    return(
        <div className="container my-5">
            {content}
        </div>
    )
}

function ProductList(props)
{
    const [products,setProducts]=useState([]);
    function fetchProducts()
    {
        fetch("http://localhost:3004/products")
            .then((response)=>{
                if(!response.ok)
                {
                    throw new Error("Unexpected Server Response");
                }
               return  response.json()
            })
            .then((data)=>{
               // console.log(data);
                setProducts(data);
            })
            .catch((error)=>console.log("Error:",error));
    }

    //fetchProducts();
    useEffect(() => fetchProducts()

    , []);

    return(
        <>
            <h2 className="text-center mb-3">List of Products </h2>
            <button onClick={()=> props.showForm()} type="button" className="btn btn-primary me-2">Create</button>
            <button onClick={()=>fetchProducts()} type="button" className="btn btn-outline-primary me-2">Refresh</button>
            <table className="table">
                <thead>
                <tr>
                    <th>ID:</th>
                    <th>Color:</th>
                    <th>Description:</th>


                </tr>
                </thead>
                <tbody>
                {
                    products.map((products,index)=>{

                        products.createdAt = undefined;
                        products.price = undefined;
                        return(
                           <tr key={index}>
                               <td>{products.id}</td>
                               <td>{products.color}</td>
                               <td>{products.description}</td>
                               <td style={{width:"10px",whiteSpace:"nowrap"}}>
                                   <button type="button" className="btn btn-primary btn-sm ne-2">Edit</button>
                                   <button type="button" className="btn btn-danger btn-sm">Delete</button>
                               </td>
                           </tr>
                        );
                    })
                }
                </tbody>
            </table>
        </>
    );
}


function ProductForm(props)
{

function handleSubmit(event)
{
    event.preventDefault();

    const formData=new FormData(event.target);

    const product=Object.fromEntries(formData.entries());

    if(!product.color || !product.description)
    {
        console.log("Please provide all the required fields!");
        return;
    }

    product.createdAt=new Date().toISOString().slice(0,10);
    fetch("http://localhost:3004/products",{method:"POST",headers:{
        "Content-Type":"application/json", body:JSON.stringify(product)
        }})
        .then((response)=>{response.ok()
            {
                throw new Error("Network response was not Ok")
            }
        return response.json()
        })
        .then((data)=>props.showList())
            .catch((error)=>{
                console.log("Error:",error)
            });
}




    return(
        <>
            <h2 className="text-center mb-3">Create New Product </h2>


            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <form onSubmit={(event)=>handleSubmit(event)}>
                      <div className="row mb-3">
                          <label className="col-sm-4 col-form-label">Name</label>
                          <div className="col-sm-8">
                              <input className="form-control" name="name" defaultValue=""/>
                          </div>
                      </div>
                    </form>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <form>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Brand</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="name" defaultValue=""/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <form>
                                    <div className="row mb-3">
                                        <label className="col-sm-4 col-form-label">Category</label>
                                        <div className="col-sm-8">
                                            <select className="form-select" name="category" defaultValue="">
                                            <option value='Other'>Other</option>
                                                <option value='Phones'>Phones</option>
                                                <option value='Computers'>Computers</option>
                                                <option value='Accessories'>Accessories</option>
                                                <option value='GPS'>GPS</option>
                                                <option value='Cameras'>Cameras</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <form>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Price</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="price" defaultValue=""/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <form>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Description</label>
                            <div className="col-sm-8">
                                <textarea className="form-control" name="description" defaultValue=""/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <form>
                        <div className="row mb-3">
                            <button className="col-sm-4 col-form-label">Save</button>
                            <div className="col-sm-4 d-grid">
                                <button onClick={()=>props.showList()} type="button" className="btn btn-secondary me-2">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}