import React from 'react'
import Channel from './Channel'
import './Sidebar.css'
import SearchIcon from '@material-ui/icons/Search';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <h5>CANAIS SEGUIDOS</h5>
        <Channel avatar='https://logopng.com.br/logos/among-us-127.svg'
          name='Verde'
          followers='120k'/>

        <Channel avatar='https://logopng.com.br/logos/among-us-125.svg'
          name='Rosa'
          followers='300k'/>

        <Channel avatar='https://logopng.com.br/logos/among-us-129.svg'
          name='Azul'
          followers='650k'/>

        <p className='sidebar__topShowMore'>Show More</p>
        
        <h5>CANAIS RECOMENDADOS</h5>

        <Channel avatar='https://logopng.com.br/logos/among-us-126.svg'
          name='Branco'
          followers='780k'/>

        <Channel avatar='https://logopng.com.br/logos/among-us-130.svg'
          name='Vermelho'
          followers='210k'/>

        <Channel avatar='https://logopng.com.br/logos/among-us-124.svg'
          name='Ciano'
          followers='50k'/>

        <p className='sidebar__topShowMore'>Show More</p>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__bottomContainer">
          <i><SearchIcon/></i>
          <input type="text" placeholder='Buscar amigo' />
        </div>
      </div>

    </div>
  )
}

export default Sidebar