import React from 'react';
import { Row, Col, ListGroup, Dropdown, Container } from 'react-bootstrap';

function ListaNotas({notas}) {
    return(
        <ListGroup variant="flush">
        {
        notas.map((nota) => {
          console.log(nota.titulo)
          return (
              <ListGroup.Item action>
                <Container>
                  <Row>
                    <Col>
                      <h3>{nota.titulo}</h3>
                      <hr />
                      <p>Data de criação: {nota.dataCriacao}</p>
                    </Col>
                    <Col md={2}>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          ...
                        </Dropdown.Toggle>
    
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1"><i class="bi bi-trash"></i> Excluir</Dropdown.Item>
                          <Dropdown.Item href="#/action-2"><i class="bi bi-tags"></i> Alterar etiqueta</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  </Row>
                </Container>
              </ListGroup.Item>
          )
        })}
        </ListGroup>
    )

  }

export default ListaNotas;