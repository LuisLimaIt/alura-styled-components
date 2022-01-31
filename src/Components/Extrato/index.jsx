import React from 'react';
import { Box, Botao } from '../UI';
import { extratoLista } from '../../info';

const Extrato = () => {
  return <Box> 
    {extratoLista.updates.map(({ id, type, from, value, date }) => {
      return(
        <div key={id}>
          <div>{type}</div>
          <div>{from}</div>
          <Botao>Ver Mais</Botao>
        </div>
      )
    }
  )} </Box>
};

export default Extrato;
