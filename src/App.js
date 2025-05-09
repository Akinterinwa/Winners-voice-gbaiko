import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ChoirTable from './components/ChoirTable';
import MemberDetails from './components/MemberDetails';
import './styles/choirtable.css';
import Footer from './components/Footer';
import FullDevotion from './components/FullDevotion';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/choir-members" />} />
        <Route path="/choir-members" element={<ChoirTable />} />
        <Route path="/member/:id" element={<MemberDetails />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
        <Route path="/devotion" element={<FullDevotion />} />
      </Routes>
      <Footer />
    </Router>
  );
}
