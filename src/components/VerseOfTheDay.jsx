import React, { useEffect, useState } from 'react';
import '../styles/verseoftheday.css';

const VerseOfTheDay = () => {
  const [verse, setVerse] = useState('');
  const [reference, setReference] = useState('');
  const [verseURL, setVerseURL] = useState('');

  // Optional: fallback devotion content
  // const title = "Faith Over Fear";
  // const devotion = "When we face trials, fear often whispers that we’re alone and powerless. But with Christ, we are empowered to rise above every challenge. Trust in Him today and let His strength carry you.";

  useEffect(() => {
    fetch("https://beta.ourmanna.com/api/v1/get/?format=json")
      .then(response => response.json())
      .then(data => {
        const details = data.verse.details;
        setVerse(details.text);
        setReference(details.reference);
        setVerseURL(details.verseurl);
      })
      .catch(error => {
        console.error("Error fetching verse:", error);
        // fallback in case of error
        setVerse("I can do all things through Christ who strengthens me.");
        setReference("Philippians 4:13");
      });
  }, []);

  return (
    <div className="verse-container enhanced-verse">
      <h2 className="verse-title">📖 Verse of the Day</h2>
      <h3 className="devotion-title">{reference}</h3>
      <p className="devotion-paragraph">"{verse}"</p>
    </div>
  );
};

export default VerseOfTheDay;
