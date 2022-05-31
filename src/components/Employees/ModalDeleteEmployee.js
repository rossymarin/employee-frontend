import {Modal, Button} from 'react-bootstrap'
import {useState} from 'react'
import { MdDeleteForever } from 'react-icons/md';

function ModalDeleteEmployee({funcion, id}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = () => {
        funcion(id)
        setShow(false)
    };
  
    return (
      <>
        <Button variant="danger" onClick={handleShow}>
            <MdDeleteForever/>
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Eliminar empleado</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            ¿Esta seguro de eliminar este registro?
            <p>No se podra deshacer esta acción.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={(e) => {handleSubmit(e)}}>Eliminar de todas formas</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ModalDeleteEmployee