import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InboxIcon from '@material-ui/icons/Inbox';
import ChatIcon from '@material-ui/icons/Chat';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import {Avatar} from '@material-ui/core';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>

        <div className="header__esquerda">
            <img className='header__esquerdaLogo'
                src='https://logopng.com.br/logos/among-us-131.svg' 
                alt='amongus'/>

            <h2>Seguindo</h2>
            <h2>Descubra</h2>
        </div>

        <div className="header__meio">
            <input type='text' placeholder='Buscar'/>
            <div className="header__meioLogoContainer">
                <SearchIcon/>
            </div>
        </div>

        <div className="header__direita">
            <div className="header__direitaContainer">
                <i><InboxIcon/></i>
                <i><ChatIcon/></i>
                <div className="header__direitaGoLive">
                    <i><LiveTvIcon/></i>
                    Fique AO VIVO
                </div>
                <Avatar/>
            </div>
        </div>
    </div>
  )
}

export default Header