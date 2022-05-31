import {Modal, Button} from 'react-bootstrap'
import {useState} from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function ModalCreateEmployee({funcion}) {
    const URI = 'http://localhost:8000/employees'
    console.log("rossy")

    const [show, setShow] = useState(false);
    const [nomina, setNomina] = useState('')
    const [nombre, setNombre] = useState('')
    const [puesto, setPuesto] = useState('')
    const [ubicacion, setUbicacion] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [extension, setExtension] = useState('')
    const [status, setStatus] = useState('')
    const [jubilado, setJubilado] = useState('')
    const [correop, setCorreop] = useState('')
    const [telefonop, setTelefonop] = useState('')
    const [foto, setFoto] = useState('')
  
    const handleClose = () => setShow(false);
    const handleShow = () => {
      setShow(true)
    };

    //guardar
    const store = async (e) => {
      e.preventDefault()
      console.log(nomina)
      if(nomina.length!==0 && nombre.length!==0 && puesto.length!==0 && ubicacion.length!==0 && correo.length!==0 && telefono.length!==0 && extension.length!==0 && status.length!==0 && jubilado.length!==0 && correop.length!==0 && telefonop.length!==0 && foto.length!==0){ 
        await axios.post(URI, {
          nomina: nomina, 
          nombre: nombre, 
          puesto: puesto, 
          ubicacion: ubicacion, 
          correo: correo,
          telefono: telefono,
          extension: extension,
          status: status,
          jubilado: jubilado,
          correop: correop,
          telefonop: telefonop,
          foto: foto,
        })
        funcion()
        handleClose()
      }else{
        alert("Ningun campo debe estar vacio")
      }
     
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} style={{marginRight: 10}}>
            <AiOutlineUserAdd/>
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          scrollable={"true"}
        >
         
            <Modal.Header closeButton>
              <Modal.Title>Agregar Empleado</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label>Nomina</label>
              <input id="nomina" type="text" className="form-control" value={nomina} onChange={(e)=>setNomina(e.target.value)} required></input>
              <label>Nombre</label>
              <input id="nombre" type="text" className="form-control" value={nombre} onChange={(e)=>setNombre(e.target.value)}></input>
              <label>Puesto</label>
              <input id="puesto" type="text" className="form-control" value={puesto} onChange={(e)=>setPuesto(e.target.value)}></input>
              <label>Ubicación</label>
              <input id="ubicacion" type="text" className="form-control" value={ubicacion} onChange={(e)=>setUbicacion(e.target.value)}></input>
              <label>Email</label>
              <input id="correo" type="text" className="form-control" value={correo} onChange={(e)=>setCorreo(e.target.value)}></input>
              <label>Telefono</label>
              <input id="telefono" type="text" className="form-control"  value={telefono} onChange={(e)=>setTelefono(e.target.value)}></input>
              <label>Extension</label>
              <input id="extension" type="text" className="form-control" value={extension} onChange={(e)=>setExtension(e.target.value)}></input>
              <label>Status</label>
              <input id="status" type="text" className="form-control" value={status} onChange={(e)=>setStatus(e.target.value)}></input>
              <label>Jubilado</label>
              <input id="jubilado" type="text" className="form-control" value={jubilado} onChange={(e)=>setJubilado(e.target.value)}></input>
              <label>Email Personal</label>
              <input id="correop" type="text" className="form-control" value={correop} onChange={(e)=>setCorreop(e.target.value)}></input>
              <label>Telefono Personal</label>
              <input id="telefonop" type="text" className="form-control" value={telefonop} onChange={(e)=>setTelefonop(e.target.value)}></input>
              <label>Foto</label>
              <input id="foto" type="text" className="form-control" value={foto} onChange={(e)=>setFoto(e.target.value)}></input> 
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
            <Button variant="primary" type="submit" onClick={store}>Crear Registro</Button>
          </Modal.Footer>
        
        </Modal>
      </>
    );
  }
  
  export default ModalCreateEmployee