import React, {useState, useEffect} from 'react'
import "./Products.css"; 
import axios from "axios";
import {useNavigate} from "react-router-dom";   
import Search from '../Search/Search';
import Pagination from '../Pagination/Pagination';
import Sidebar from '../Sidebar/Sidebar';

function Products() { 
  const [products, setProducts] = useState([]); 
  const [total, setTotal] = useState();
  const [firstNumber, setFirstNumber] = useState(1);
  const navigate = useNavigate();  

  const howmany = 10;
  
  useEffect(() => {
    axios.get("http://localhost:3001/api").then((res) => {
      setProducts(res.data.products);  
      setTotal(res.data.total); 
    })
  }, [])   

  const paginationNumber = total / howmany;    
  const indexOfLast = firstNumber * howmany; 
  const indexOfFirst = indexOfLast - howmany; 
  
  return (
    <> 
     <Sidebar />
      <div className='product-table' > 
      <Search /> <Pagination paginationNumber={paginationNumber} setFirstNumber={setFirstNumber} />
        <div className='container'>
          <div className='row justify-content-center' > 
          {
             products.slice(indexOfFirst, indexOfLast).map((value, key) => {

              return (
                <div key={key} className='col-lg-3 tables mt-5' >
                <div className='body'>
                  <div className='img-section'>
                    <img src={value.thumbnail} alt="" />
                  </div> 
                  <div className='list-section' >
                    <div className='list-title' >
                      <h6>{value.title}</h6>
                      <p>brand name: {value.brand}</p>
                      <p className='price' >price:  ${value.price}</p>
                    </div>  
                    <button onClick={() => navigate(`/page/${value.id}`)} >See more</button>
                  </div>
                </div>
              </div> 
              )  
            })
          }
          </div>  
        </div>
      </div>
    </>
  )
}

export default Products