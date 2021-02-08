import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import StyledPage from './styles';

export default function SkillsPage(){
    const [profession, setProfession] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:4000/professions/${id}`)
        .then(response  => {
            setProfession(response.data);
        }).catch(() => {
            alert('erro');
        });
      }, [id]);
    return (
        <StyledPage>
            {!profession ? <h1>Carregando...</h1> :
                (
                    <>
                        <h2>{profession.name}</h2>
                        <div className="image"><img src={profession.image} alt={profession.name} /></div>
                        {
                            profession.skills.map(s => {
                                return (
                                    <div key={s.id} className="container">
                                        <h3>{s.name}</h3>
                                        <p>{s.description}</p>
                                        {
                                            s.image ?  <div className="image"><img className="skillImage" src={s.image} alt={s.name} /></div> : ""
                                        }
                                        <p className="course">Cursos relacionados:</p>
                                        {
                                            s.links.map(l => <a href={l.link} key={l.id}>Acesse aqui</a>)
                                        }
                                    </div>
                                )
                            })
                        }
                    </>
                )
            }
        </StyledPage>
    )
}