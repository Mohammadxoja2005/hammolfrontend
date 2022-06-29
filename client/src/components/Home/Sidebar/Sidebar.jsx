import React, {useState, useEffect} from 'react'
import styles from "./Sidebar.module.scss"
import axios from "axios";
import {useNavigate} from "react-router-dom" 

function Sidebar() { 
  const [category, setCategory] = useState([]); 
  const [dataCategory, setDataCategory] = useState([]);  

  const navigate = useNavigate(); 

  useEffect(() => {
    axios.get("http://localhost:3001/api/category").then((res) => {
      setCategory(res.data); 
    }) 
  }, [])  

  const onSubmit = async (name) => { 
    navigate(`/category/${name}`); 
  }

  return ( 
    <>
    <div className={styles.app}>
  <aside className={styles.sidebar}>
    <header>Menu</header>
    <nav className={styles['sidebar-nav']}>
      <ul>  
            <li onClick={() => navigate("/")} >
              <a href="#">
                 <span>All</span>
              </a>
            </li>
        {
          category.map((value, key) => {
            return(
              <li key={key}  onClick={() => onSubmit(value)}> 
              <a href="#">
                 <span>{value}</span>
              </a>
            </li>
           )
          })
        }
      </ul>
    </nav>
  </aside>
</div>
    </>
  )
}

export default Sidebar; 