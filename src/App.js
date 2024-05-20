import './App.scss';


import { Link } from 'react-router-dom';

function App() {
  return ( 
      <div className='app_overall'>
          <div className='app_project'>
            <Link to = "/project1">project 1</Link> 
          </div>
          <div className='app_project'>
            <Link to = "/project2">project 2</Link>
          </div>
          <div className='app_project'>
            <Link to = "/project3">project 3</Link>
          </div>
      </div>
  );
}

export default App;
