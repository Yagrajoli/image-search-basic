import React, { useState } from 'react'
import Sresult from './Sresult';

export default function Search() {

    const [img,setImg] = useState("");
    
    const inputEvent = (e) =>{
        setImg(e.target.value)
    }

  return (
    <>
        <div className="container">
            <div className='search-box'>
                <h1>Image Search</h1>
                <input 
                type="text"
                onChange={inputEvent}
                value={img}
                placeholder='search-image'
                 />
            </div>


            {
                img===""? null: <div className='image'>
            <Sresult name = {img} />
            </div>
            }

           
        </div>
    </>
  )
}
