import React from 'react';
import StyledHeader from './styles';
import { Link } from 'react-router-dom';


export default function Header(){
    return(
        <StyledHeader>
            <Link to="/"><h1>PreparaSkills</h1></Link>
        </StyledHeader>
    )
}