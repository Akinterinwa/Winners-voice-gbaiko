import React from 'react';
import '../styles/executives.css';
import members from '../data/members';
import { Link } from 'react-router-dom'; // Add this

const executiveRoles = [
  { id: 23, role: "Choir Leader" },
  { id: 8, role: "Assistant Choir Leader" },
  { id: 5, role: "Music Director" },
  { id: 7, role: "Secretary" },
];

const ChoirExecutives = () => {
  const executives = executiveRoles.map(exec => {
    const member = members.find(m => m.id === exec.id);
    return {
      id: exec.id,
      name: member?.FullName || 'Unknown',
      photo: member?.Picture || 'https://via.placeholder.com/60',
      role: exec.role,
    };
  });

  return (
    <div className="executives-container">
      <h2 className="executives-title">👔 Choir Executives</h2>
      <ul className="executives-list">
        {executives.map(exec => (
          <li key={exec.id} className="executive-card">
            <Link 
              to={`/member/${exec.id}?page=2`} 
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
            >
              <img src={exec.photo} alt={exec.name} className="executive-photo" />
              <div>
                <h4 className="executive-name">{exec.name}</h4>
                <p className="executive-role">{exec.role}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChoirExecutives;
