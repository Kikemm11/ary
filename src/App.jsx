import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './routes/Main';

export default function App() {
  return (
    <Router basename="/ary"> {/* Use the base path here */}
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}