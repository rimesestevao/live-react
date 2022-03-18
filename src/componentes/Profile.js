import React from 'react'
import './Profile.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile__header'>
        <div className='profile__topLeft'>
          <img src='https://logopng.com.br/logos/among-us-131.svg' alt='amongus'/>
          <div className='profile__topLeftDetails'>
            <h1>Di_Wade</h1>
            <h3>3,2 mil seguidores</h3>
          </div>
        </div>
        <div className='profile__topRight'>
          <div className='graybg'><FavoriteBorderIcon/></div>
          <div className='graybg'><NotificationsIcon/></div>
          <div className='purplebg'><StarBorderIcon/><i>Inscrição</i></div>
          <div><MoreVertIcon/></div>
          
        </div>
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
            <img alt='valorant preview' src='https://static-cdn.jtvnw.net/cf_vods/d1m7jfoe9zdc1j/74a402aae3d6c376b91d_di_wade_45876472957_1647523667//thumb/thumb0-320x180.jpg'/>
            <div className='item__details'>
              <img src='https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg' alt='among'/>
              <div className='item__detailsText'>
                <h4>Radiante no vava</h4>
                <p>Di_Wade</p>
                <p>Valorant</p>
              </div>
            </div>
          </div>
          <div className='item'>
            <img alt='valorant preview' src='https://static-cdn.jtvnw.net/cf_vods/d1m7jfoe9zdc1j/82f7c8e9555b7ff18f23_di_wade_45833767869_1647178685//thumb/thumb0-320x180.jpg'/>
            <div className='item__details'>
              <img src='https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg' alt='among'/>
              <div className='item__detailsText'>
                <h4>Vava rumo ao radiante</h4>
                <p>Di_Wade</p>
                <p>Valorant</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className='profile__categories'>
        <h2>Categorias transmitidas por Di_Wade</h2>
        <img src='https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg' alt='among'/>
        <h3>Valorant</h3>
      </div>
    </div>
  )
}

export default Profile