import React, { useEffect, useState } from 'react';
import Devotion from '../data/dailyDevotion.json';
import '../styles/verseoftheday.css';
import { useNavigate } from 'react-router-dom';

const VerseOfTheDay = () => {
  const [devotion, setDevotion] = useState({ title: '', body: '' });
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor(
      (today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
    );
    const index = (dayOfYear - 1) % Devotion.length;
    setDevotion(Devotion[index]);
  }, []);

  // Get preview text (first 150 characters)
  const previewText = devotion.body 
    ? devotion.body.substring(0, 150) + '...' 
    : '';

  const paragraphs = devotion.body?.split('\n\n') || [];
  const navigate = useNavigate();

  return (
    <div className="verse-container enhanced-verse navigate">
      <h2 className="verse-title">📖 Daily Devotion</h2>
      <h3 className="devotion-title">{devotion.title}</h3>
      
      {showFullContent ? (
        <div className="devotion-paragraph">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="devotion-paragraph">
              {paragraph}
            </p>
          ))}
          <button 
            onClick={() => setShowFullContent(false)}
            className="view-toggle"
          >
            Show Less
          </button>
        </div>
      ) : (
        <div className="devotion-content">
          <p>{previewText}</p>
          <button 
  onClick={() => navigate('/devotion', { state: { devotion } })}
  className="view-toggle"
>
  View All
</button>
        </div>
      )}
    </div>
  );
};

export default VerseOfTheDay;