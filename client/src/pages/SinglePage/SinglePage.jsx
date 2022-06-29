import React, {useEffect, useState} from 'react'
import "./SinglePage.css"; 
import Search from '../../components/Home/Search/Search';
import axios from "axios"; 
import {useParams} from "react-router-dom";

function SinglePage() {
  const {id} = useParams(); 
  const Id = id; 
  const [singleData, setSingleData] = useState([0]); 

  useEffect(() => {
    axios.get(`http://localhost:3001/api/product/${Id}`).then(res => setSingleData(res.data));  
  }, [])  
   

  return (
    <> 
    <Search/>
    <div className='container single d-flex' >
        <div className='img-part' >
          <img src={singleData.thumbnail} alt="" /> 

          <div className='bunch-images' >  

          {singleData.images ? singleData.images.map((value, key) => {
              return(
                <img key={key} src={value} alt="" />
              )            
            }) : <div>no images</div>
          } 
          </div>
        
        </div> 
        <div className='text-part' >
          <div className='main-text' >
            <p>title: {singleData.title}</p>
            <p>description: {singleData.description}</p>
            <p>price: {singleData.price}</p>
            <p>brand: {singleData.brand}</p>
            <p>category: {singleData.category}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SinglePage; 