import React from 'react'
import './Profile.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RecentItens from './RecentItens';

const Profile = () => {
  return (
    <div className='profile'>
        <div className='profile__topLeft'>
          <img src='https://logopng.com.br/logos/among-us-131.svg' alt='amongus'/>
          <div className='profile__topLeftDetails'>
            <h1>Laranja</h1>
            <h3>400k seguidores</h3>
          </div>
        </div>
        <div className='profile__topRight'>
          <i className='graybg'><FavoriteBorderIcon/></i>
          <i className='graybg'><NotificationsIcon/></i>
          <i><MoreVertIcon/></i>
        </div>
        <div className='profile__menu'>
          <h2 className='active'>Início</h2>
          <h2>Sobre</h2>
          <h2>Programação</h2>
          <h2>Vídeos</h2>
          <h2 className='arrow'><ArrowUpwardIcon/></h2>
          <h2>Chat</h2>
        </div>
        <div className='profile__recent'>
          <h2>Transmissões recentes</h2>
          <div className='profile__recentItens'>
            <RecentItens
            url={'https://www.youtube.com/watch?v=EIJOI7KlzHw'} title={'Sons do among us'}/>
          </div>
        </div>
    </div>
  )
}

export default Profile