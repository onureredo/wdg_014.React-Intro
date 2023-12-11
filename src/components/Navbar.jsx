import Welcome from './Welcome';

function Navbar() {
  const isLoggedIn = true;
  const userName = 'Oskar';

  return (
    <div className='navbar'>
      <h2>Navbar</h2>
      <Welcome isLoggedIn={isLoggedIn} userName={userName} />
    </div>
  );
}

export default Navbar;
