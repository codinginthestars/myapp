import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from 'react-router-dom';
import Appointments from './components/Appointments';
import Doctors from './components/Doctors';
import Patients from './components/Patients'
import './App.css';

function App() {
  const isLinkActive = (path) => window.location.pathname === path;

  return (
    <div className="App">
      <Router>
        <div className="container">
          <h1 style={{ color: "dark blue" }}>
            GFG- Hospital Management App
          </h1>
          <nav>
            <ul>
              <li className={isLinkActive('/appointments') ? 'active' : ''}>
                <NavLink to="/appointments">
                  Appointments
                </NavLink>
              </li>
              <li className={isLinkActive('/doctors') ? 'active' : ''}>
                <NavLink to="/doctors">
                  Doctors
                </NavLink>
              </li>
              <li className={isLinkActive('/patients') ? 'active' : ''}>
                <NavLink to="/patients">
                  Patients
                </NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path='/appointments' element={<Appointments />} />
            <Route path='/' element={<Appointments />} />
            <Route path='/doctors' element={<Doctors />} />
            <Route path='/patients' element={<Patients />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;