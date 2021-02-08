import React from 'react';
import { Link } from 'react-router-dom';
import StyledProfession from './styles';

export default function Profession({props}){
    const {id, image, name} = props;
    return(
        <StyledProfession>
            <Link to={`/${id}`}><img src={image} alt={name} /></Link>
            <Link to={`/${id}`}><p>{name}</p></Link>
        </StyledProfession>
    )
}