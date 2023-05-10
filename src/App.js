import { Fragment } from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from './routes/home/home.routes'
import Auth from './routes/auth/auth.routes';

function App() {
  return (
    <Routes>
      <Fragment>
        <Route path='/' exact element={<Auth />} />
        <Route path='/home' element={<Home />} />
      </Fragment>
    </Routes>
  );
}

export default App;
