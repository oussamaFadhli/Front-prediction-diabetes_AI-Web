import { Outlet, Navigate } from 'react-router-dom'
import checkAuth from './checkAuth'
const PrivateRoutes = () => {
    let auth = checkAuth();
    return(
        auth ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes