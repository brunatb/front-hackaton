import axios from 'axios';
import React, {useEffect, useState} from 'react';
import StyledHome from './styles';
import Profession from '../../components/Profession';

export default function Home(){
    const [professions, setProfessions] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:4000/professions`)
        .then(response  => {
            setProfessions(response.data);
        }).catch(() => {
            alert('erro');
        });
      }, []);
    return (
        <StyledHome>
            <ul className="container">
                {professions.length === 0 ? <h1>Carregando...</h1> :
                    professions.map(p => <Profession key={p.id} props={p} />)
                }
            </ul>
        </StyledHome>
    )
}