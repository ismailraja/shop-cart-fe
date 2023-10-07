// src/Update.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Update = () => {
  const [userData, setUserData] = useState([]);
  const [updatedData, setUpdatedData] = useState({});
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    // Fetch data from the provided endpoint
    axios.get('http://103.186.185.127:8082/users')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const handleUpdate = () => {
    // Send a PUT request to update user data
    axios.put(`http://103.186.185.127:8082/users/${updatedData.id}`, updatedData)
      .then(response => {
        console.log('User updated successfully:', response.data);
        setIsUpdated(true);
      })
      .catch(error => {
        console.error('Error updating user:', error);
      });
  };

  const handleInputChange = (event, userId) => {
    // Update the user data object with the new input value
    const updatedUser = userData.find(user => user.id === userId);
    updatedUser[event.target.name] = event.target.value;
    setUpdatedData(updatedUser);
  };

  return (
    <div className="update">
      <h2>Update User Data</h2>
      {userData.map(user => (
        <div key={user.id}>
          <h3>{user.firstName} {user.lastName}</h3>
          <div>
            <label htmlFor={`firstName-${user.id}`}>First Name:</label>
            <input
              type="text"
              id={`firstName-${user.id}`}
              name="firstName"
              value={user.firstName}
              onChange={(e) => handleInputChange(e, user.id)}
            />
          </div>
          <div>
            <label htmlFor={`lastName-${user.id}`}>Last Name:</label>
            <input
              type="text"
              id={`lastName-${user.id}`}
              name="lastName"
              value={user.lastName}
              onChange={(e) => handleInputChange(e, user.id)}
            />
          </div>
          {/* Add more user data fields to update as needed */}
          <button onClick={handleUpdate}>Update</button>
        </div>
      ))}
      {isUpdated && <p>User data has been updated successfully.</p>}
    </div>
  );
};

export default Update;
