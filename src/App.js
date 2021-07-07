import React from 'react';
import { Row, Col, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ListaNotas from './components/ListaNotas';
import EditorNota from './components/EditorNota';


function App() {
  

  const notas = [
    {
      titulo: "Nota número 1",
      dataCriacao: "01/01/2021",
      dataUltilmaAlteracao: "05/07/2021",
      etiquetas: ["compras", "compromisso"],
      corpo: `
        <h1>Este é um exemplo de corpo </h1>
        <p>Este é o corpo de uma nota qualquer para teste </p>
      `
    },
    {
      titulo: "Nota número 2",
      dataCriacao: "01/06/2021",
      dataUltilmaAlteracao: "05/07/2021",
      etiquetas: ["trabalho", "reuniao"],
      corpo: `
        <h1>Este é um exemplo de corpo </h1>
        <p>Este é o corpo de uma nota qualquer para teste 02 </p>
      `
    },
    {
      titulo: "Nota número 03",
      dataCriacao: "01/02/2021",
      dataUltilmaAlteracao: "05/07/2021",
      etiquetas: ["compras", "compromisso"],
      corpo: `
        <h1>Este é um exemplo de corpo </h1>
        <p>Este é o corpo de uma nota qualquer para teste 03</p>
      `
    },
  ]

 

  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>Logotipo</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="p-3">
        <h1>Bloco de Notas</h1>
        <Row>
          <Col md={4}>
            <ListaNotas notas={notas} />
          </Col>
          <Col>
            <EditorNota 
              nota = {notas[0]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
