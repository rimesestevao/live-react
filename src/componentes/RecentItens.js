import React from 'react'
import './RecentItens.css'

const RecentItens = (url, title) => {
  return (
    <div className='item'>
        <iframe 
        title='transmissao anterior'
        width='400'
        height='235'
        src={url}
        frameborder='0'
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>

      <div className='item__details'>
        <img src='https://cdn1.epicgames.com/salesEvent/salesEvent/amoguslandscape_2560x1440-3fac17e8bb45d81ec9b2c24655758075' alt='among'/>
        <h4>{title}</h4>
        <p>laranja</p>
        <p>Among Us</p>
      </div>
    </div>
  )
}

export default RecentItens