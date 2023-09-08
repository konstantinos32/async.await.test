import React, { useState, useEffect } from 'react';

function RandomNumber() {
  const [number, setNumber] = useState(null);

  useEffect(() => {
    const fetchNumber = async () => {
      // Simulate an asynchronous operation with a 2-second delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Generate a random number between 1 and 10
      const randomNumber = Math.floor(Math.random() * 10) + 1;

      // Set the number state variable with the generated number
      setNumber(randomNumber);
    };

    fetchNumber();
  }, []);

  return (
    <div>
      {number === null ? (
        <p>Loading...</p>
      ) : (
        <p>Random Number: {number}</p>
      )}
    </div>
  );
}

export default RandomNumber;
