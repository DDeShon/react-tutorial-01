const Content = () => {
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave", "Kim", "Mikel"];
    const int = Math.floor(Math.random() * 5);
    return names[int];
  };

  const handleClick = () => {
    console.log("You clicked it.");
  };

  return (
    <main>
      <p>Hello {handleNameChange()}!</p>
      <button onClick={handleClick}>Click It</button>
    </main>
  );
};

export default Content;
