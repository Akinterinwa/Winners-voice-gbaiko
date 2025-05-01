import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import members from '../data/members';
import '../styles/choirtable.css';
import Birthday from './Birthday';
import VerseOfTheDay from './VerseOfTheDay';
import ChoirExecutives from './ChoirExecutives';

const ChoirTable = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const pageParam = parseInt(searchParams.get('page')) || 1;
  const [currentPage, setCurrentPage] = useState(pageParam);
  const [searchTerm, setSearchTerm] = useState('');

  const membersPerPage = 10;

  // Update URL when page changes
  useEffect(() => {
    navigate(`/choir-members?page=${currentPage}`, { replace: true });
  }, [currentPage, navigate]);

  const filteredMembers = members.filter(member =>
    member.FullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = filteredMembers.slice(indexOfFirstMember, indexOfLastMember);
  const totalPages = Math.ceil(filteredMembers.length / membersPerPage);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
    <div className="choir-page-wrapper">
      <div className="choir-table-section">
        <h1 className="page-title">Winners Voice LFC Dashboard</h1>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>

        <div className="table-wrapper">
          <table className="choir-table">
            <thead>
              <tr>
                <th></th>
                <th>Full Name</th>
                <th>Voice Part</th>
                {/* <th>Phone Number</th> */}
              </tr>
            </thead>
            <tbody>
              {currentMembers.map((member) => (
                <tr key={member.id}>
                  <td>
                    <img src={member.Picture} alt={member.FullName} className="member-image" />
                  </td>
                  <td>
                    <Link 
                      to={`/member/${member.id}?page=${currentPage}`} 
                      className="link-button"
                    >
                      {member.FullName}
                    </Link>
                  </td>
                  <td>{member.VoicePart}</td>
                  {/* <td>{member.PhoneNumber}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="pagination-container">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`pagination-button ${currentPage === i + 1 ? 'active' : ''}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
    
    <div className="info-widgets-container">
    <VerseOfTheDay />

    <Birthday upcomingBirthdays={members} />

    <ChoirExecutives />
    </div>

    </>
  );
};

export default ChoirTable;
