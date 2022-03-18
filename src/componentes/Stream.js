import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Stream.css'

const Stream = () => {
  return (
    <div className='stream'>
        <div className='stream__container'>
            <div className='stream__containerEsquerda'>
                <h3>Offline</h3>
                <h4>Confira esta transmissão de Valorant de ontem.</h4>
                <div className='stream__containerEsquerdaAlerta'>
                    <NotificationsIcon/>
                    <i>Clique para receber notificações</i>
                </div>
            </div>
            <iframe src='https://www.twitch.tv/di_wade' title='stream do di wave'></iframe>
        </div>
    </div>
  )
}

export default Stream