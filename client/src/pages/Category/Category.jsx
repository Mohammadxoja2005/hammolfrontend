import React, {useEffect, useState} from 'react'
import axios from "axios";  
import {useNavigate} from "react-router-dom"
import Search from '../../components/Home/Search/Search';
import Sidebar from '../../components/Home/Sidebar/Sidebar';
import {useParams} from "react-router-dom"; 
import CategoryPagination from '../../components/Category/CategoryPagination/CategoryPagination';

function Category() { 
  const [dataCategory, setDataCategory] = useState([]); 
  const [firstNumber, setFirstNumber] = useState(1);   
  const {name} = useParams();
  const navigate = useNavigate(); 

  useEffect(() => {
    axios.get(`http://localhost:3001/api/category/${name}`).then(res => setDataCategory(res.data)); 
  })  
  const howmany = 10;
  const total = dataCategory.length; 

  const paginationNumber = total / howmany;    
  const indexOfLast = firstNumber * howmany; 
  const indexOfFirst = indexOfLast - howmany; 
  
  // task search by specific category ////////////////////////////////////////////////////////////

  return (
    <> 
    <Sidebar/> 
    <div className='product-table' > 
    <Search /> 
    {/* <CategoryPagination paginationNumber={paginationNumber} setFirstNumber={setFirstNumber} /> */}
      <div className='container'>
        <div className='row justify-content-center' >  
        
        {
           dataCategory.map((value, key) => {
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
                  <button onClick={() => navigate(`/page/${value.id}`)}  >see more</button>
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

export default Category