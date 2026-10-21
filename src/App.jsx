import { Link, Route, Routes } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="card">
      <h1>Dashboard is Live</h1>
      <p>Your dashboard page is running successfully.</p>
    </div>
  );
}

function Profile() {
  return (
    <div className="card">
      <h1>Profile page is Live</h1>
      <p>Your profile page is running successfully.</p>
    </div>
  );
}

function App() {
  return (
    <div className="app-shell">
      <nav className="nav">
        <Link to="/">Dashboard</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
