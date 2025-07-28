// Izarra Villareal CS 81 JavaScript Module 10 Assignment 10B Dynamic Profile

// GitHub URL: https://github.com/izzyduzzzit/module10a-profile

// Import useState from React
import { useState } from 'react';

const Profile = ({ name, occupation, funFact, bio }) => { /* Using props for name, occupation, and funFact */
  const [showBio, setShowBio] = useState(false); /* useState toggle to shoh or hide bios for the athletes */

  const toggleBio = () => { /* The toggle function */
    setShowBio(!showBio);
  };

  return (
    <div style={{ /* Inline style markup */
      border: '1px solid #ccc', 
      padding: '20px', 
      margin: '20px', 
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>{name}</h2>
      <p><strong>Occupation:</strong> {occupation}</p>
      <p><strong>Fun Fact:</strong> {funFact}</p>
      
      <button onClick={toggleBio} style={{ /* Button to toggle showing or hiding bios */
        backgroundColor: '#007bff',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px'
      }}>
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>

      {showBio && ( /* Bio with inline style markup */
        <div style={{
          marginTop: '15px',
          padding: '15px',
          backgroundColor: '#e9ecef',
          borderRadius: '4px'
        }}>
          <h4>Biography:</h4>
          <p> {bio}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
