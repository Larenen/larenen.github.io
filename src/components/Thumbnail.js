import React from 'react';
import './css/Thumbnail.css';
import {Link} from 'react-router-dom';

export default function Thumbnail(props){
    return (
    <Link to={`project/${props.id}`}>
        <div class="thumbnail">
            <div class="thumbnail__container">
                <div class="thumbnail__img" style={{backgroundImage: `url(${props.image})`}}></div>
                <div class="thumbnail__content"> 
                <h1 class="thumbnail__caption">{props.caption}</h1>
                </div>
            </div>
        </div>
    </Link>
    )
}