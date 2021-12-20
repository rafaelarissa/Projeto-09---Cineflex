import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from "./Footer";

export default function Session() {
  const { idFilme } = useParams();
  const [sessions, setSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`);
    promessa.then(resposta => {
      setSessions(resposta.data);
      setIsLoading(false);
    });
  }, []);

  console.log(sessions);
  return (
    <>
      {isLoading ?
        <>
          <div>
            <p>Loading</p>
          </div >
        </>
        :
        <>
          <Header>
            <h1>CINEFLEX</h1>
          </Header>
          <Main>
            <Container>
              <h2>Selecione o horário</h2>
            </Container>
            <ContainerSessions>
              {sessions.days.map(session =>
                <Sessions>
                  <span className="sessionDate">
                    {session.weekday} - {session.date}
                  </span>
                  <div className="sessionTime">
                    {session.showtimes.map(showtime =>
                      <Link to={`/sessoes/${showtime.id}`}><button>{showtime.name}</button></Link>)
                    }
                  </div>
                </Sessions>)
              }
            </ContainerSessions>
          </Main>
          <Footer title={sessions.title} posterURL={sessions.posterURL} />
        </>
      }
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
    background-color: #ffffff;

    display: flex;
    flex-wrap: wrap;
    height: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  text-align: center;
  
  width: 374px;
  height: 110px;
`;

const ContainerSessions = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 23px;
`;

const Sessions = styled.div`
  margin-left: 23px;
  
  .sessionDate{
    font-size: 20px;
    color: #293845;
  }
  .sessionTime{
    margin-top: 32px;
  }
  .sessionTime button{
    background-color:  #E8833A;
    border-radius: 3px;
    border: none;

    width: 82px;
    height: 43px;
    margin-right: 8px;

    color: #ffffff;
    font-size: 18px;
  }

`;