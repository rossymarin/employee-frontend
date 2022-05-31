import {Card, Button, Nav, Tab, Tabs} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import { BiEdit } from 'react-icons/bi';

function DataCard({image, data, margin}) {
    const [actual, setActual] = useState("")

    const handleOnChange = (e) => {
        let res = window.location.href.split('#')
        setActual(res)
        console.log(res)
    }

    useEffect(() => {
        let res = window.location.href.split('#')
        if (!res.length>0) {
            setActual(res)
        }
        
    },[actual])
    return (
        <div>
            <Card style={{margin: margin}}>
                <Tabs defaultActiveKey="personal-profile" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="personal-profile" title="Datos Personales">
                        <div className="">
                            <p>Nombre: {data ? data.nombre : "Nombre"}</p>
                            <p>Telefono Personal: {data ? data.telefonop : "Telefono"}</p>
                            <p>Correo Personal: {data ? data.correop : "Telefono"}</p>
                        </div>
                    </Tab>
                    <Tab eventKey="laboral-profile" title="Datos Laborales">
                    <div className="">
                            <p>Nomina: {data ? data.nomina : "Nomina"}</p>
                            <p>Puesto: {data ? data.puesto : "Puesto"}</p>
                            <p>Ubicacion: {data ? data.ubicacion : "Ubicacion"}</p>
                            <p>Extension: {data ? data.extension : "Extension"}</p>
                            <p>Status: {data ? data.status : "Status"}</p>
                            <p>Jubilado: {data ? data.jubilado : "Jubilado"}</p>
                            <p>Telefono: {data ? data.telefono : "Telefono"}</p>
                            <p>Correo: {data ? data.correo : "Telefono"}</p>
                        </div>
                    </Tab>
                </Tabs>
            </Card>
        </div>
    );
  }
  
  export default DataCard