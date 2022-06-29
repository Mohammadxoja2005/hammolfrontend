import React from 'react'; 
import "./CategoryPagination.css"; 

function CategoryPagination({paginationNumber, setFirstNumber}) {
    let numbers = [];  

   for(let i = 1; i <= paginationNumber; ++i) {
    numbers.push(i); 
   } 
   
  return (
    <div className='pagination' >  
     {
        numbers.map((value, key) => {
            return (
                <button key={key} className='pagination-element' onClick={() => setFirstNumber(value)}>{value}</button>           
            )
        })
     }   
    </div>
  )
}

export default CategoryPagination