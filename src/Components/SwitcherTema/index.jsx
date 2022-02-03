import React from 'react';
import ThemeOn from '../../assets/images/themeOn.svg'
import ThemeOff from '../../assets/images/themeOn.svg'
import { Icone } from '../UI';


const claro = <Icone src={ThemeOn} alt="Tema claro" />
const escuro = <Icone src={ThemeOff} alt="Tema escuro" />

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ tema }) => (tema ? escuro : claro);
