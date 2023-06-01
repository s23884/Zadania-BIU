import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Add from './Add';
import Sub from './Sub';
import Mul from './Mul';
import Div from './Div';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/add?x=4&y=5">Add</Link>
            </li>
            <li>
              <Link to="/sub?x=10&y=20">Sub</Link>
            </li>
            <li>
              <Link to="/mul?x=6&y=7">Mul</Link>
            </li>
            <li>
              <Link to="/div?x=5&y=4">Div</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/sub" element={<Sub />} />
          <Route path="/mul" element={<Mul />} />
          <Route path="/div" element={<Div />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
