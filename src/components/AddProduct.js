import React,{useState} from 'react'


const AddProduct=()=>
{

    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const [company,setCompany]=useState("");
    const [error,setError]=React.useState(false)

    const HandleClick= async ()=>
    {
        console.log(name);
        
       if(!name || !price || !category || !company)
       {
        setError(true);
        return false;
       }

        console.log({name,price,category,company})
        const UserId=JSON.parse(localStorage.getItem('user'))._id;
        
        let result=await fetch("http://localhost:3000/add-product",{
           method:'post',
           body:JSON.stringify({name,price,category,company}),
           headers:
           {
            "Content-Type":"application/json"
           }


        });
        result=await result.json();
        console.log(result);


    }

    return(
        <div className='product '> 
                 <h1>Add Product </h1>
                 <input type="text" value={name}     className='inputBox' onChange={(e)=>
                {
                    setName(e.target.value)
                }} placeholder='Enter product Name'/>
                {error && !name && <span className='invalid-input'>Enter valid Name</span>}

                 <input type="text" value={price}    className='inputBox' onChange={(e)=>
                {
                    setPrice(e.target.value)
                }} placeholder='Enter price'/>
                   {error && !price &&<span className='invalid-input'>Enter valid Price</span>}

                 <input type="text" value={category} className='inputBox' onChange={(e)=>
                {
                    setCategory(e.target.value)
                }} placeholder='Enter cateogory'/>
                  {error && !category && <span className='invalid-input'>Enter valid category</span>}

                 <input type="text" value={company}  className='inputBox' onChange={(e)=>
                {
                    setCompany(e.target.value)
                }} placeholder='Company name'/>
                {error && !company && <span className='invalid-input'>Enter valid Company</span>}
                 <button className='appButton' onClick={HandleClick}>Add Product </button>
        </div>
       
    )
}
export default AddProduct;