/* eslint-disable no-loop-func */
import {Modal, Button} from 'react-bootstrap'
import {useState} from 'react'
import { AiOutlineFileAdd } from 'react-icons/ai';
import axios from 'axios'

function ModalImportEmployees({funcion}) {
    const [show, setShow] = useState(false);
    
    const URI = 'http://localhost:8002/importar'
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (e) => {
        importEmployees()
        setTimeout( ()=>{
          funcion()
        },1600)
        setShow(false)
    };

    const importEmployees = async () => {
        await axios.post(URI)
        funcion()
        handleClose()
    }

    return (
      <>
        <Button variant="success" onClick={handleShow} style={{width: 50, height: 50}}>
            <AiOutlineFileAdd/>
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Importar empleados</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            EmployeeData.csv
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={(e) => {handleSubmit(e)}}>Importar</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ModalImportEmployees