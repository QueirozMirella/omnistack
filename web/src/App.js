import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter(){
    counter++;
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;

//componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação.
//estado: informações mantidas pelo componente (lembrar de imutabilidade)
//propriedade: Informações que um componente pai passa para o componente filho