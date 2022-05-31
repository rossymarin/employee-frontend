/* eslint-disable no-loop-func */
import {Modal, Button} from 'react-bootstrap'
import {useState} from 'react'
import { MdDeleteForever } from 'react-icons/md';
import axios from 'axios'
import {csv} from "csvtojson";
import * as fs from 'fs';

function ModalImportEmployees({funcion}) {
    const [show, setShow] = useState(false);
    const URI = 'http://localhost:8000/employees/'
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (e) => {
        importEmployees()
        funcion()
        setShow(false)
    };

    const importEmployees = async () =>{
        const fileName = "example-employees.csv";

        csv().fromFile(fileName).then(source => {
            for (var i = 0; i < source.length; i++) {
                var nomina = source[i]["nomina"],
                    nombre = source[i]["nombre"],
                    puesto = source[i]["puesto"],
                    ubicacion = source[i]["ubicacion"],
                    correo = source[i]["correo"],
                    telefono = source[i]["telefono"],
                    extension = source[i]["extension"],
                    status = source[i]["status"],
                    jubilado = source[i]["jubilado"],
                    correop = source[i]["correop"],
                    telefonop = source[i]["telefonop"],
                    foto = source[i]["foto"]
                    
                    if(nomina.length===0){nomina="!"}
                    if(nombre.length===0){ nombre="!"}
                    if(puesto.length===0){puesto="!"}
                    if(ubicacion.length===0){ubicacion="!"}
                    if(correo.length===0){ correo="!"}
                    if(telefono.length===0){ telefono="!" }
                    if(extension.length===0){ extension="!" }
                    if(status.length===0){ status="!" }
                    if(jubilado.length===0){ jubilado="no" }
                    if(telefonop.length===0){ telefonop="!" }
                    if(correop.length===0){ correop="!"}
                    if(foto.length===0){ foto="!" }

                    if(nomina==="!" && nombre==="!" && puesto==="!" && ubicacion==="!" && correo==="!" && telefono==="!" && extension==="!" && status==="!" && correop==="!" && telefonop==="!" && foto==="!"){
                        console.log("Campos vaciosssss")
                    }else{
                        if (jubilado==="X") {
                            jubilado = "si"
                        }
                        var insertStatement = `INSERT INTO empleados values(null,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
                        var items = [nomina, nombre, puesto, ubicacion, correo, telefono, extension, status, jubilado, correop, telefonop, foto];
                        
                        axios.create(URI+"import", insertStatement, items, (err) => {
                            if (err) {
                                console.log("Unable to insert item at row ", i + 1);
                                return console.log(err);
                            }else{
                                console.log("All items stored into database successfully");
                            }
                        });
                    }
            }  
        });
    } 
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
            <Button variant="primary" onClick={(e) => {handleSubmit(e)}}>Importar</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ModalImportEmployees