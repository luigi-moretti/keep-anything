import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {  Form } from 'react-bootstrap';

function EditorNota({nota}){
    const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };


    return(
        <Form>
              <Form.Group className="mb-3">
                <Form.Label>Título da Nota</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Título"
                  value={nota.titulo}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Corpo da Nota</Form.Label>
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  //initialValue="<p>This is the initial content of the editor.</p>"
                  apiKey='yzohbu98m0sn1j1c0bm1ql8buron7nanm9354wy9chh0x0x2'
                  initialValue={nota.corpo}
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      'advlist autolink lists link image charmap print preview anchor',
                      'searchreplace visualblocks code fullscreen',
                      'insertdatetime media table paste code help wordcount', 'tinydrive'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                      'bold italic backcolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent |  insertfile' +
                      'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                  }}
                />
              </Form.Group>
              <button onClick={log}>Log editor content</button>
            </Form>
    )
}
export default EditorNota;