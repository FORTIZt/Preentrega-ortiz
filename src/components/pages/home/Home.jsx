const Home = ({ nombre, userName, setUserName, contador, sumar }) => {
  return (
    <div style={{ padding: "0 20px" }}>
      <h1>Hola {nombre} </h1>
      <h2>hola {userName}</h2>
      <button onClick={() => setUserName("carmen")}>Cambiar nombre</button>

      <h2>{contador}</h2>

      <button onClick={sumar}>Clicks</button>
    </div>
  );
};

export default Home;
