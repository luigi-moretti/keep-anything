import React, { useRef } from 'react';
import { Row, Col, ListGroup, Dropdown, Form, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Editor } from '@tinymce/tinymce-react';


function App() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
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
            <ListGroup variant="flush">
              <ListGroup.Item action active>
                <Container>
                  <Row>
                    <Col>
                      <h3>Titulo da nota 01</h3>
                      <hr />
                      <p>Data de criação: 01/01/2001</p>
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
              <ListGroup.Item action>
                <Container>
                  <h3>Titulo da nota 02</h3>
                  <hr />
                  <p>Data de criação: 01/01/2001</p>
                </Container>
              </ListGroup.Item>
              <ListGroup.Item action>
                <Container>
                  <h3>Titulo da nota 03</h3>
                  <hr />
                  <p>Data de criação: 01/01/2001</p>
                </Container>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Título da Nota</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Título"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Corpo da Nota</Form.Label>
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  //initialValue="<p>This is the initial content of the editor.</p>"
                  apiKey='yzohbu98m0sn1j1c0bm1ql8buron7nanm9354wy9chh0x0x2'
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      'advlist autolink lists link image charmap print preview anchor',
                      'searchreplace visualblocks code fullscreen',
                      'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                      'bold italic backcolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                  }}
                />
              </Form.Group>
              <button onClick={log}>Log editor content</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
