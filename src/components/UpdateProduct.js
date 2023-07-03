import React,{useState,useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const UpdateProduct=()=>
{

    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const [company,setCompany]=useState("");
    const [error,setError]=React.useState(false)
    const navigate=useNavigate();

    const params=useParams();
    useEffect(() => {
    
    getProductDetail()
    }, [])

    const getProductDetail=async()=>
    {
       // console.log(params)
        let result=await fetch(`http://localhost:3000/product/${params.id}`);
        result=await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category)
        setCompany(result.company)
    }
    const HandleClick= async ()=>
    {
       //console.log({name,price,category,company,error})

       let result= await fetch(`http://localhost:3000/product/${params.id}`,{
               method:"put",
               body:JSON.stringify({name,price,category,company}),
               headers:{
                'content-Type':"application/json"
               }

       })
       result=await result.json();
       console.log(result);
       navigate("/product")
    }

    return(
        <div className='product '> 
                 <h1>Update Product </h1>
                 <input type="text" value={name}     className='inputBox' onChange={(e)=>
                {
                    setName(e.target.value)
                }} placeholder='Enter product Name'/>
              


                 <input type="text" value={price}    className='inputBox' onChange={(e)=>
                {
                    setPrice(e.target.value)
                }} placeholder='Enter price'/>



                 <input type="text" value={category} className='inputBox' onChange={(e)=>
                {
                    setCategory(e.target.value)
                }} placeholder='Enter cateogory'/>
             



                 <input type="text" value={company}  className='inputBox' onChange={(e)=>
                {
                    setCompany(e.target.value)
                }} placeholder='Company name'/>
               


                 <button className='appButton' onClick={HandleClick}>Update Product </button>
        </div>
       
    )
}
export default UpdateProduct;