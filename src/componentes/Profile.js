import React from 'react'
import './Profile.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';

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
          <div className='item'>
            <i><MusicVideoIcon/></i>
            <div className='item__details'>
              <img src='https://cdn1.dotesports.com/wp-content/uploads/sites/3/2020/09/19175711/TopBanner_com.innersloth.spacemafia-1536x858-1-1.jpg' alt='among'/>
              <div className='item__detailsText'>
                <h4>Jogando among na noitada</h4>
                <p>Laranja</p>
                <p>Among Us</p>
              </div>
            </div>
          </div>
          <div className='item'>
            <i><MusicVideoIcon/></i>
            <div className='item__details'>
              <img src='https://cdn1.dotesports.com/wp-content/uploads/sites/3/2020/09/19175711/TopBanner_com.innersloth.spacemafia-1536x858-1-1.jpg' alt='among'/>
              <div className='item__detailsText'>
                <h4>Jogando among na noitada</h4>
                <p>Laranja</p>
                <p>Among Us</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className='profile__categories'>
        <h2>Categorias transmitidas por Laranja</h2>
        <img src='https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg' alt='among'/>
        <h3>Just Chatting</h3>
      </div>
    </div>
  )
}

export default Profile