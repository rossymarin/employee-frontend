import {Link} from 'react-router-dom'

function ToolBar() {
    return(
        <div>
            <div className="col mt-2">
                <Link to={`/create`} className="btn btn-primary">Crear</Link>
            </div>
            <div className="col mt-2">
                <Link to={`/import/`} className="btn btn-primary">Importar</Link>
            </div>
        </div>
        
    )
}

export default ToolBar