import { useParams, Link, useLocation } from 'react-router-dom';
import choirMembers from '../data/members';
import '../styles/memberdetails.css';
import { useEffect } from 'react';

export default function MemberDetails() {

   // Scroll to top on mount
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get('page') || 1;  // Read the page from URL

  const member = choirMembers.find(m => m.id === parseInt(id));

  if (!member) {
    return <div className="not-found">Member not found.</div>;
  }

  return (
    <div className="member-details-container fade-in">
      <Link 
        to={`/choir-members?page=${page}`}
        className="back-button"
      >
        ← Back to Choir Table
      </Link>

      <div className="member-card">
        <div className="member-image-section">
          <img src={member.Picture} alt={member.FullName} className="member-large-image" />
        </div>

        <div className="member-info-section">
          <h2 className="member-name">{member.FullName}</h2>

          <div className="info-group">
            <p><strong>Gender:</strong> {member.Gender}</p>
            <p><strong>Date of Birth:</strong> {member.Dob}</p>
            <p><strong>Phone Number:</strong> {member.PhoneNumber}</p>
            <p><strong>Residential Address:</strong> {member.ResidentialAddress}</p>
            <p><strong>State of Origin:</strong> {member.StateOfOrigin}</p>
            <p><strong>Permanent Address:</strong> {member.PermanentAddress}</p>
            <p><strong>Occupation:</strong> {member.Occupation}</p>
            <p><strong>Marital Status:</strong> {member.MaritalStatus}</p>
            <p><strong>Voice Part:</strong> {member.VoicePart}</p>
            <p><strong>Instrument Played:</strong> {member.InstrumentPlayed}</p>
          </div>

          <div className="emergency-contact-card">
            <h3 className="section-title">Emergency Contact</h3>
            <div className="info-group">
              <p><strong>Name:</strong> {member.EmergencyContactName}</p>
              <p><strong>Relationship:</strong> {member.EmergencyContactRelation}</p>
              <p><strong>Contact Details:</strong> {member.EmergencyContactPhone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
