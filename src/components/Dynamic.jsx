import HeroProfile from './HeroProfile';

function Dynamic() {
  const justiceLeague = [
    { id: 1, name: 'Batman' },
    { id: 2, name: 'Wonder Woman' },
    { id: 3, name: 'Superman' },
    { id: 4, name: 'The Flash' },
  ];

  return (
    <div className='hero'>
      {/* {justiceLeague.map((hero) => (
        <h2 key={hero.id}>{hero.name}</h2>
      ))} */}

      {justiceLeague.map((hero) => (
        <HeroProfile key={hero.id} heroName={hero.name} />
      ))}
    </div>
  );
}

export default Dynamic;
