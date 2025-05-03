import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/verseoftheday.css';

const FullDevotion = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const devotion = location.state?.devotion;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!devotion) {
    return <div>No devotion data found. <button onClick={() => navigate(-1)}>Go Back</button></div>;
  }

  const paragraphs = devotion.body?.split('\n\n') || [];

  return (
    <div className="verse-container enhanced-verse">
      <h2 className="verse-title">📖 Full Devotion</h2>
      <h3 className="devotion-title">{devotion.title}</h3>
      <div className="devotion-paragraph">
        {paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>
      <button onClick={() => navigate(-1)} className="view-toggle">Go Back</button>
    </div>
  );
};

export default FullDevotion;
