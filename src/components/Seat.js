import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from "./Footer";
import Loading from './Loading';

export default function Seat() {
  const { idSessao } = useParams();
  const [seat, setSeat] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const enabled = true;

  useEffect(() => {
    const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`);
    promessa.then(resposta => {
      setSeat(resposta.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ?
        <>
          <Loading />
        </>
        :
        <>
          <Header>
            <h1>CINEFLEX</h1>
          </Header>
          <Main>
            <Container>
              <h2>Selecione o(s) assento(s)</h2>
            </Container>
            <ContainerSeats>
              {seat.seats.map(seat =>
                <Seats>
                  <span>
                    {seat.name}
                  </span>
                </Seats>)}
            </ContainerSeats>
            <SubtitleSeats>
              <Div color="#8DD7CF" borderColor="#1AAE9E">
                <div></div>
                <span>Selecionado</span>
              </Div>
              <Div color="#C3CFD9" borderColor="#7B8B99">
                <div></div>
                <span>Disponível</span>
              </Div>
              <Div color="#FBE192" borderColor="#F7C52B">
                <div></div>
                <span>Indisponível</span>
              </Div>
            </SubtitleSeats>
            <CustomerInformation>
              <span className="customerName">Nome do comprador:</span><input type="text" placeholder="Digite seu nome.."></input>
              <span className="customerCPF">CPF do comprador:</span><input type="text" placeholder="Digite seu CPF..."></input>
            </CustomerInformation>
            <Button>Reservar assento(s)</Button>
          </Main>
          <Footer title={seat.title} posterURL={seat.posterURL} />
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
    align-items: center;
    justify-content: center;
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

const ContainerSeats = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  row-gap: 18px;
  column-gap: 10px;
`;

const Seats = styled.div`
  background-color: #C3CFD9;

  font-size: 11px;
  color: #000000;
  text-align: center;
  
  padding-top: 9px;
  width: 26px;
  height: 26px;
  border-radius: 50%
`;

const SubtitleSeats = styled.div`
  display: flex;
 
  padding-top: 16px;
  padding-bottom: 42px;
  gap: 30px;

  font-size: 13px;
  color: #4E5A65;
`;

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;

  div{
    background-color: ${props => props.color};
    border: 1px solid ${props => props.borderColor};
    border-radius: 50%;
    width: 25px;
    height: 25px;
  }
`;

const CustomerInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  font-size: 18px;
  color: #293845;


  input{
    width: 327px;
    height: 51px;
    border: 1px solid #D5D5D5;
    border-radius: 3px;

  }
  input::placeholder{
    color: #AFAFAF;
    font-size: 18px;
    font-style: italic;
    margin-left: 18px;

  }
  
`;

const Button = styled.button`
  background-color: #E8833A;
  border-radius: 3px;
  border: none;

  margin-top: 57px;
  margin-bottom: 30px;
  width: 225px;
  height: 42px;

  color: #ffffff;
  font-size: 18px;
`;