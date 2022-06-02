import {Modal, Button} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import { BiEdit } from 'react-icons/bi';
import './Modal.css';
import axios from 'axios'

function ModalEmployee({data, funcion}) {
  const URI = 'http://localhost:8000/employees/'
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({
      nomina:data.nomina,
      nombre:data.nombre,
      puesto:data.puesto,
      ubicacion:data.ubicacion,
      correo:data.correo,
      telefono:data.telefono,
      extension:data.extension,
      status:data.status,
      jubilado:data.jubilado,
      telefonop:data.telefonop,
      correop:data.correop,
      foto:data.foto,
    });

    let [nomina, setNomina] = useState('')
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
    const id = data.id
  
    const handleClose = () => setShow(false);
    const handleShow = () => {
      setShow(true)
    };
    const handleOnChange = (e) => {
      console.log(e.target.id)
      e.preventDefault();
      if (e.target.id === "nomina") {
        setNomina(e.target.value)
        nomina=e.target.value
      }else if (e.target.id === "nombre") {
        setNombre(e.target.value)
      }else if (e.target.id === "puesto") {
        setPuesto(e.target.value)
      }else if (e.target.id === "ubicacion") {
        setUbicacion(e.target.value)
      }else if (e.target.id === "correo") {
        setCorreo(e.target.value)
      }else if (e.target.id === "telefono") {
        setTelefono(e.target.value)
      }else if (e.target.id === "extension") {
        setExtension(e.target.value)
      }else if (e.target.id === "jubilado") {
        setJubilado(e.target.value)
      }else if (e.target.id === "status") {
        setStatus(e.target.value)
      }else if (e.target.id === "correop") {
        setCorreop(e.target.value)
      }else if (e.target.id === "telefonop") {
        setTelefonop(e.target.value)
      }else if (e.target.id === "foto") {
        setFoto(e.target.value)
      } 

    }

    const update = async (e) => {
      e.preventDefault()
      console.log(nombre)
      await axios.put(URI+id,{
        nomina: nomina,
        nombre: nombre,
        ubicacion: ubicacion,
        extension: extension,
        status: status,
        jubilado: jubilado,
        correo: correo,
        telefono: telefono,
        foto: foto,
        correop: correop,
        telefonop: telefonop,
        puesto: puesto
      })
      funcion()
      handleClose()
    }

    useEffect(() => {
      getBlogById()
    },[])

    const getBlogById = async () => {
      const res = await axios.get(URI+id)
        setNomina(res.data.nomina)
        setNombre(res.data.nombre)
        setPuesto(res.data.puesto)
        setUbicacion(res.data.ubicacion)
        setCorreo(res.data.correo)
        setTelefono(res.data.telefono)
        setExtension(res.data.extension)
        setStatus(res.data.status)
        setJubilado(res.data.jubilado)
        setCorreop(res.data.correop)
        setTelefonop(res.data.telefonop)
        setFoto(res.data.foto)
      }  
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} style={{marginRight: 0}}>
            <BiEdit/>
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          scrollable={true}
        >        
          <Modal.Header closeButton>
            <Modal.Title>Editar Empleado</Modal.Title>
          </Modal.Header>
          <Modal.Body 
            >
              <label>Nomina</label>
              <input id="nomina" type="text" className="form-control" onChange={e=>handleOnChange(e)} value={nomina}></input>
              <label>Nombre</label>
              <input id="nombre" type="text" className="form-control" onChange={e=>handleOnChange(e)} value={nombre}></input>
              <label>Puesto</label>
              <input id="puesto" type="text" className="form-control" onChange={e=>handleOnChange(e)} value={puesto}></input>
              <label>Ubicación</label>
              <input id="ubicacion" type="text" className="form-control" onChange={e=>handleOnChange(e)} value={ubicacion}></input>
              <label>Email</label>
              <input id="correo" type="text" className="form-control" onChange={e=>handleOnChange(e)} value={correo}></input>
              <label>Telefono</label>
              <input id="telefono" type="text" className="form-control" onChange={e=>handleOnChange(e)} value={telefono}></input>
              <label>Extension</label>
              <input id="extension" type="text" className="form-control" onChange={e=>handleOnChange(e)} value={extension}></input>
              <label>Status</label>
              <input id="status" type="text" className="form-control" onChange={e=>handleOnChange(e)} value={status}></input>
              <label>Jubilado</label>
              <input id="jubilado" type="text" className="form-control" onChange={e=>handleOnChange(e)} value={jubilado}></input>
              <label>Email Personal</label>
              <input id="correop" type="text" className="form-control" onChange={e=>handleOnChange(e)} value={correop}></input>
              <label>Telefono Personal</label>
              <input id="telefonop" type="text" className="form-control" onChange={e=>handleOnChange(e)} value={telefonop}></input>
              <label>Foto</label>
              <input id="foto" type="text" className="form-control" onChange={e=>handleOnChange(e)} value={foto}></input> 
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Regresar</Button>
            <Button variant="primary" onClick={update}>Guardar Cambios</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ModalEmployee