import {Modal, Button} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import { BiEdit } from 'react-icons/bi';
import './Modal.css';
import axios from 'axios'
import { useParams } from 'react-router-dom';

function ModalEmployee({data, funcion}) {
  const URI = 'http://localhost:8000/employees'
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

    const id = useParams()
  
    const handleClose = () => setShow(false);
    const handleShow = () => {
      setShow(true)
    };
    const handleOnChange = (e) => {
      e.preventDefault();
      if (e.target.id === "nomina") {
        setForm({
          ...form,
          nomina: e.target.value
        })
      }else if (e.target.id === "nombre") {
          setForm({
            ...form,
            nombre: e.target.value
          })
      }else if (e.target.id === "puesto") {
        setForm({
          ...form,
          puesto: e.target.value
        })
      }else if (e.target.id === "ubicacion") {
        setForm({
          ...form,
          ubicacion: e.target.value
        })
      }else if (e.target.id === "correo") {
        setForm({
          ...form,
          correo: e.target.value
        })
      }else if (e.target.id === "telefono") {
        setForm({
          ...form,
          telefono: e.target.value
        })
      }else if (e.target.id === "extension") {
        setForm({
          ...form,
          extension: e.target.value
        })
      }else if (e.target.id === "jubilado") {
        setForm({
          ...form,
          jubilado: e.target.value
        })
      }else if (e.target.id === "correop") {
        setForm({
          ...form,
          correop: e.target.value
        })
      }else if (e.target.id === "telefonop") {
        setForm({
          ...form,
          telefonop: e.target.value
        })
      }else if (e.target.id === "foto") {
        setForm({
          ...form,
          foto: e.target.value
        })
      } 

    }

    const update = async (e) => {
      e.preventDefault()
      await axios.put(URI+id,{
        ...form,
      })
      funcion()
      handleClose()
    }

    useEffect(() => {
      getBlogById()
    },[])

    const getBlogById = async () => {
      const res = await axios.get(URI+id)
      setForm({
        ...form,
        nomina: res.data.nomina,
        nombre: res.data.nombre,
        puesto: res.data.puesto,
        ubicacion: res.data.ubicacion,
        correo: res.data.correo,
        telefono: res.data.telefono,
        extension: res.data.extension,
        status: res.data.status,
        jubilado: res.data.jubilado,
        correop: res.data.correop,
        telefonop: res.data.telefonop,
        foto: res.data.foto
      })
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} style={{marginRight: 10}}>
            <BiEdit/>
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          scrollable={"true"}
        >        
          <Modal.Header closeButton>
            <Modal.Title>Editar Empleado</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <label>Nomina</label>
              <input id="nomina" type="text" className="form-control" onChange={e=>handleOnChange(e)} value={form.nomina}></input>
              <label>Nombre</label>
              <input id="nombre" type="text" className="form-control" onChange={e=>handleOnChange(e)} value={form.nombre}></input>
              <label>Puesto</label>
              <input id="puesto" type="text" className="form-control" onChange={e=>handleOnChange(e)} value={form.puesto}></input>
              <label>Ubicación</label>
              <input id="ubicacion" type="text" className="form-control" onChange={e=>handleOnChange(e)} value={form.ubicacion}></input>
              <label>Email</label>
              <input id="correo" type="text" className="form-control" onChange={e=>handleOnChange(e)} value={form.correo}></input>
              <label>Telefono</label>
              <input id="telefono" type="text" className="form-control" onChange={e=>handleOnChange(e)} value={form.telefono}></input>
              <label>Extension</label>
              <input id="extension" type="text" className="form-control" onChange={e=>handleOnChange(e)} value={form.extension}></input>
              <label>Status</label>
              <input id="status" type="text" className="form-control" onChange={e=>handleOnChange(e)} value={form.status}></input>
              <label>Jubilado</label>
              <input id="jubilado" type="text" className="form-control" onChange={e=>handleOnChange(e)} value={form.jubilado}></input>
              <label>Email Personal</label>
              <input id="correop" type="text" className="form-control" onChange={e=>handleOnChange(e)} value={form.correop}></input>
              <label>Telefono Personal</label>
              <input id="telefonop" type="text" className="form-control" onChange={e=>handleOnChange(e)} value={form.telefonop}></input>
              <label>Foto</label>
              <input id="foto" type="text" className="form-control" onChange={e=>handleOnChange(e)} value={form.foto}></input> 
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
            <Button variant="primary" onClick={update}>Guardar Cambios</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ModalEmployee