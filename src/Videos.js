import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Videos.css';
function Videos({image,title,views,timestamp,channel,channelImg}) {
    return (
        <div className="video_card">
            <img className="thumbnail" src={image} alt=""/>
            <div className="video__info">
                    <Avatar className="video_card__avatar" alt={channel} src={channelImg}/>
                    <div className="video__text">
    <h4>{title}</h4>
    <p>{channel}</p>
    <p>
        {views} . {timestamp}
    </p>
            </div>
            </div>
            
        </div>
    );
}

export default Videos;