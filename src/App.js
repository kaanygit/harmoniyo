import './App.css';
import Section from './component/section/section.component';
import Footer from './component/footer/footer.component';
import Navbar from './component/navbar/navbar.component';
import { Fragment } from 'react';


function App() {
  return (
      <Fragment>
        <div className='container mx-auto flex flex-col items-center justify-center max-h-screen h-screen'>
          <Navbar/>
          <Section/>
          <Footer/>
        </div>
      </Fragment>
  );
}

export default App;
