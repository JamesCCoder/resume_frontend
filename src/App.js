import './App.scss';


import { Link } from 'react-router-dom';
import Portfolio from 'MainPage/Portfolio';

function App() {
  return ( 
      <div>
          {/* <div>
            <Link to = "/project1/login" className='app_project'>project 1</Link> 
          </div>
          <div>
            <Link to = "/project2" className='app_project'>project 2</Link>
          </div>
          <div>
            <Link to = "/project3" className='app_project'>project 3</Link>
          </div> */}
          <Portfolio />
      </div>
  );
}

export default App;
