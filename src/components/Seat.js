// import axios from 'axios';
// import { Link, useParams } from "react-router-dom";
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import Footer from "./Footer";

// export default function Seat() {
//     const { idSessao } = useParams();
//     const [seat, setSeat] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`);
//         promessa.then(resposta => {
//             setSeat(resposta.data);
//             setIsLoading(false);
//         });
//     }, []);

//     return (
    
// )
// }