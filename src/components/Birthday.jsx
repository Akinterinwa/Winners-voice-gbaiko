import React from 'react';

const Birthday = ({ upcomingBirthdays = [] }) => {
  const today = new Date();
  const currentYear = today.getFullYear();

  const getUpcomingBirthdays = () => {
    return upcomingBirthdays
      .filter(member => member?.Dob)
      .map(member => {
        const [month, day] = member.Dob.split('/').map(Number);
        const birthdayThisYear = new Date(currentYear, month - 1, day);
        
        if (birthdayThisYear < today) {
          birthdayThisYear.setFullYear(currentYear + 1);
        }
        
        return {
          ...member,
          birthdayDate: birthdayThisYear
        };
      })
      .sort((a, b) => a.birthdayDate - b.birthdayDate)
      .slice(0, 4);
  };

  const upcoming = getUpcomingBirthdays();
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="birthday-sidebar">
      <h2 className="birthday-title">🎂 Upcoming Birthdays</h2>
      {upcoming.length > 0 ? (
        upcoming.map((member) => {
          const [month, day] = member.Dob.split('/');
          const monthName = months[parseInt(month, 10) - 1];

          return (
            <a 
              key={member.id}
              href={`/member/${member.id}?page=2`}
              className="birthday-card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {member.Picture && (
                <img src={member.Picture} alt={member.FullName} className="birthday-image" />
              )}
              <div className="birthday-info">
                <h4>{member.FullName}</h4>
                <p>{monthName} {day} 🎉</p>
              </div>
            </a>
          );
        })
      ) : (
        <p>No upcoming birthdays found.</p>
      )}
    </div>
  );
};

export default Birthday;
