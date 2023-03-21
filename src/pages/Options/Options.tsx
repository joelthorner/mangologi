import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderNavbar from './HeaderNavbar';
import './Options.scss';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  return (
    <div className="OptionsContainer">
      <HeaderNavbar></HeaderNavbar>
      {title} Page
    </div>
  );
};

export default Options;
