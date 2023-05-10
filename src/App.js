import {Route,Routes} from 'react-router-dom';
import Home from './routes/home/home.routes'
import Auth from './routes/auth/auth.routes';
import Dashboard from './routes/dashboard/dashboard.routes'
import 'tailwindcss/tailwind.css';
import PrivateRoute from './routes/private-route/private-route.routes';
function App() {
  return (
      <Routes>
        <Route element={<PrivateRoute/>}>
          <Route element={<Home/>} path='/'/>
          <Route element={<Dashboard/>} path='/dashboard'/>
        </Route>
        <Route element={<Auth/>} path='/login'/>
      </Routes> 
  );
}

export default App;
