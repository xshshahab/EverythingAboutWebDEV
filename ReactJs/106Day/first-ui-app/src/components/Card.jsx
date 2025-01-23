import React from 'react'

const Card = ({ title, desc, btnName, imgSrc }) => {
    return (
        <div className='card'>
            <img src={imgSrc} width={267} style={{ borderRadius: "10px" }} alt="" />
            <h1>{title}</h1>
            <p>{desc}</p>
            <button className='btn'>{btnName}</button>
        </div>
    )
}

export default Card