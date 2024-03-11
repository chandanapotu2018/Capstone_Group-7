import React from 'react';

const Home = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    // Redirect or show a message for non-authenticated users
    return <div>You need to log in to access the dashboard.</div>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Welcome to the Dashboard!</h2>
      {/* Add more content or components for your dashboard */}
    </div>
  );
};

export default Home;
