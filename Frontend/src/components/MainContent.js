import React from 'react';

const MainContent = () => {
  return (
    <div style={{ display: 'flex', padding: 20, gap: 30, backgroundColor: '#f0f6fb' }}>
      
      <div style={{ flex: 3, backgroundColor: 'white', padding: 20, borderRadius: 8, boxShadow: '0 0 5px #ccc' }}>
        <h3>Purpose of www.evotingindia.com</h3>
        <ul>
          <li>To eliminate paper in the voting process...</li>
          <li>Facilitate electronic voting on resolutions...</li>
          <li>Enable security holders to vote at a time...</li>
          <li>Eliminate postal and other natural delays...</li>
          <li>Increase shareholder participation...</li>
        </ul>
        <p>The e-Voting platform aims to improve transparency...</p>
        <p style={{ fontWeight: 'bold', color: 'darkblue' }}>
          The site will not be accessible between 00:00 hrs to 01:00 hrs on every Sunday,...
        </p>

        {/* Add other sections like schedule etc. here */}
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <button style={btnStyle}>Shareholders / Members</button>
        <button style={btnStyle}>Custodian / Corporate Shareholder</button>
        <button style={btnStyle}>Issuer / RTA</button>
        <button style={btnStyle}>Scrutinizer</button>
      </div>
    </div>
  );
};

const btnStyle = {
  border: '2px solid #3A679D',
  borderRadius: 6,
  padding: '10px 15px',
  cursor: 'pointer',
  backgroundColor: 'white',
  color: '#3A679D',
  fontWeight: 'bold',
  textAlign: 'center',
};

export default MainContent;
