import React, {useState, useEffect} from 'react'

function App() {
  const [backEndData, setBackEndData] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:5000');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBackEndData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {(backEndData === null) ? (
        <p>Loading...</p>
      ) : (
        backEndData.records.map((record, i) => (
          <p key={i}>{record}</p>
        ))
      )}
    </div>
  )
}

export default App