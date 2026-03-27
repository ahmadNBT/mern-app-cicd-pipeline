import { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setStatus(data.status));
  }, []);

  return (
    <div>
      <h1>My MERN App</h1>
      <p>Backend says: {status}</p>
    </div>
  );
}

export default App;