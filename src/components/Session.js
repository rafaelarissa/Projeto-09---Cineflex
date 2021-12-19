import { Link } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';

export default function Session() {
  const { idFilme } = useParams();
  const [sessions, setSession] = useState(null);

  useEffect(() => {
    const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`);
    promessa.then(resposta => { setSession(resposta.data); });
  }, []);

  return (
    <>
      <Header>
        <h1>CINEFLEX</h1>
      </Header>
      <Main>
        <div className="containerH1">
          <h2>Selecione o horário</h2>
        </div>
        <div className="containerSessions">
          {sessions.days.map(session => {
            return (
              <div className="session" >
                <span className="sessionDate">
                  {session.weekday}
                  <Link to={`/sessoes/${session.days.id}`}>
                    {session.showtimes.map(showtime => { return (<span className="sessionTime">{showtime.name}</span>) })}
                  </Link>
                </span>
              </div>)
          })}
        </div>
      </Main>
    </>
  )
}

const Header = styled.header`
    background-color: #C3CFD9;
    width: 100%;
    height: 67px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        color: #E8833A;
        font-size: 34px;
        
    }
`;

const Main = styled.main`
    display: flex;
    flex-wrap: wrap;

    .containerH1{
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 24px;
      text-align: center;
      
      width: 374px;
      height: 110px;
    }
    
    .containerBanners{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;

      .banner img{
        width: 145px;
        height: 209px;
        padding: 8px;

        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
      }
    }
`;