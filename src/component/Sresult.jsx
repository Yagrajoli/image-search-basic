import React from 'react'

export default function Sresult({name}) {
    const img = `https://source.unsplash.com/400x200/?${name}`
  return (
    <>
    <div className='img-container'>
        <img src={img} alt="some images" />
    </div>
    </>
  )
}
