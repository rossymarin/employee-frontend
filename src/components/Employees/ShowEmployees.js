import axios from 'axios'
import { useState, useEffect } from 'react'
import ModalEmployee from './ModalEditEmployee.js'
import ModalDeleteEmployee from './ModalDeleteEmployee.js'
import ModalCreateEmployee from './ModalCreateEmployee.js'
import Card from '../Card/Card.tsx'
import DataCard from '../DataCard/DataCard.js'
import ModalImportEmployees from './ModalImportEmployees.js'

const URI = 'http://localhost:8000/employees/'

const CompShowEmployees = () => {
    const[employees, setEmployee] = useState([])
    useEffect(() => {
        if (!employees.length>0) {
            getEmployees()
        }
    },[employees])

    const[employee, setEmploye] = useState(null)

    //filtrar
    const handleOnClick = (e) => {
        let res = employees.filter(item => item.id === e.target.id)
        setEmploye(res[0])
        
    }

    //procedimiento para crear blogs
    const getEmployees = async () =>{
        const res = await axios.get(URI)
        setEmployee(res.data)
    }

    //procedimiento para eliminar blogs
    const deleteEmployee = async (id) =>{
        console.log("id")
        console.log(id)
        await axios.delete(`${URI}${id}`)
        setTimeout(function(){
            getEmployees()
        },1600)
    }

    return(
        <div className="container" style={{overflow: 'hidden'}}>
            <div className="row">
                <div className="col-4">
                    <Card
                        margin={'12px'}
                        data={employee}
                        width={"89%"}
                        ml={'26%'}
                        padding={'3%'}
                        width2={'180px'}
                        visibility={"none"}
                    />
                    <DataCard
                        data={employee}
                        margin={'15px'}
                    />
                </div>
                <div className="col-7">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>Nomina</th>
                                <th>Nombre</th>
                                <th>Puesto</th>
                                <th>Status</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map ( (employee) => 
                                <tr onClick={e => handleOnClick(e)} id={employee.id} key = {employee.id}>
                                    <td id={employee.id}>{employee.nomina}</td>
                                    <td id={employee.id}>{employee.nombre}</td>
                                    <td id={employee.id}>{employee.puesto}</td>
                                    <td id={employee.id}>{employee.status}</td>
                                    <td id={employee.id}>
                                        <ModalEmployee
                                            data={employee}
                                            funcion={getEmployees}
                                        />
                                        <ModalDeleteEmployee
                                            funcion={deleteEmployee}
                                            id={employee.id}
                                        />
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="col-1">
                    <ModalCreateEmployee
                        funcion={getEmployees}
                    />
                    <ModalImportEmployees
                        funcion={getEmployees}
                    />
                </div>
            </div>
        </div>
    )
}

export default CompShowEmployees