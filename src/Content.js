const Content = () => {
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave", "Kim", "Mikel"];
    const int = Math.floor(Math.random() * 5);
    return names[int];
  };
  return (
    <main>
      <p>Hello {handleNameChange()}!</p>
    </main>
  );
};

export default Content;
