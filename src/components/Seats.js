import styled from 'styled-components';
import React, { useState } from 'react';

export default function Seats({ id, setChosenSeat, chosenSeat, available, name }) {
    const [isSelected, setIsSelected] = useState(false);
    const [isAvailable, setIsAvailable] = useState(available);

    function handleSeat(id) {
        if (!isSelected) {
            setChosenSeat([...chosenSeat, id]);
            setIsSelected(true);
        }
        else setIsSelected(false);

        if (!isAvailable) alert("Esse assento não está disponível");
    }
    // setIsAvailable(false);
    return (
        <Seat
            color={`${!isAvailable ? "#FBE192" : isSelected ? "#8DD7CF" : "#C3CFD9"}`}
            onClick={isAvailable && (() => handleSeat(id))}
        >
            {name}
        </Seat>
    );
}

const Seat = styled.div`
  background-color: ${props => props.color};

  font-size: 11px;
  color: #000000;
  text-align: center;
  
  padding-top: 9px;
  width: 26px;
  height: 26px;
  border-radius: 50%;

  cursor:pointer;
`;