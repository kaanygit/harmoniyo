import { Fragment } from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from './routes/home/home.routes'
import Auth from './routes/auth/auth.routes';
import 'tailwindcss/tailwind.css';
import PrivateRoute from './routes/private-route/private-route.routes';
import Dashboard from './routes/dashboard/dashboard.routes'
function App() {
  return (
    <Routes>
      <Fragment>
        <Route path='/' exact element={<Auth />} />
        <Route path='/' element={<PrivateRoute/>}>
          <Route path='/home' exact element={<Home />}/>
        </Route>
      </Fragment>
    </Routes>
  );
}

export default App;
