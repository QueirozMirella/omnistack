import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';

function App() {
  return (
    <>
      <Header title="title 1" />
      <Header title="title 2" />
      <Header title="title 3" />
    </>
  );
}

export default App;

//componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação.
//estado:
//propriedade: Informações que um componente pai passa para o componente filho