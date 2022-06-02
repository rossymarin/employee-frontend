import '../../App.css';
import Header from '../Header/Header.tsx'
import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2'
import axios from 'axios';
import {useState, useEffect} from 'react'

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function AppEstadistics ({activos, inactivosE, despedidos}){
    const [status, setStatus] = useState(activos)
    const [inactivos, setInactivos] = useState(inactivosE)
    const [inactivosD, setInactivosD] = useState(despedidos)
    const [state, setState] = useState({
                    chartData:{
                        labels: ['Activo', 'Inactivo por Jubilacion', 'Inactivo por Despido'],
                        datasets: [{
                            label: 'Empleados',
                            data:[status, inactivos, inactivosD]
                        }],
                        backgroundColor:[
                            '#7448c2',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)'
                        ]
                    }
                    
                })
       
        useEffect(() => {
           
            
        },[status, inactivos, inactivosD])
    
    
      return(
        <div className="App">
        <Header
            image={'https://fueradecirculacion.files.wordpress.com/2017/09/flexilogo.png'}    
            height={"70px"}
        />
        <h4>Estatus globales</h4>
            <div className="chart">
                <Bar
                    data={state.chartData}
                    options={{
                        title:{
                            display:true,
                            text: 'Empleados Activos/Inactivos',
                            fontSize: 25
                        },
                        legend:{
                            display:true,
                            position:'right'
                        },
                        maintainAspectRatio: false
                    }}
                />
                
            </div>
        </div>
        
      )
  
}

export default AppEstadistics;