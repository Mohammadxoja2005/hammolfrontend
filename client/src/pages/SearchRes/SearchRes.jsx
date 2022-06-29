import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"; 
import axios from "axios"; 
import Sidebar from '../../components/Home/Sidebar/Sidebar';
import Search from '../../components/Home/Search/Search';
import {useNavigate} from "react-router-dom"; 

function SearchRes() {
  const {name} = useParams();  
  const [searchData, setSearchData] = useState([]); 
  const navigate = useNavigate(); 
  
  useEffect(() => {
    axios.get(`http://localhost:3001/getproduct/${name.toLowerCase()}`)
    .then(res => setSearchData(res.data));   
  }, []) 

//   const onSubmit = () => {
//     window.location.reload(); 
//   }

  return (
    <>
     <Sidebar/>
     <div className='product-table' > 
    <Search /> 
      <div className='container'>
        <div className='row justify-content-center' >   
        {
           searchData.map((value, key) => {
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

export default SearchRes;