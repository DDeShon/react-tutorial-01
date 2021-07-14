const Content = () => {
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave", "Kim", "Mikel"];
    const int = Math.floor(Math.random() * 5);
    return names[int];
  };

  const handleClick = () => {
    console.log("You clicked it.");
  };

  const handleClick2 = (name) => {
    console.log(`${name} was clicked.`);
  };

  return (
    <main>
      <p>Hello {handleNameChange()}!</p>
      <button onClick={handleClick}>Click It</button>
      <button onClick={() => handleClick2("Damon")}>Click It</button>
    </main>
  );
};

export default Content;
