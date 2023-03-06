import { useGlobalContext } from "./context";

function App() {

  const { movies, loading } = useGlobalContext()

  if (loading) {
    return (
      <h1>LOADING...</h1>
    )
  }

  return (
    <section>
      {movies.map((m) => <h1>{m.titleText.text}</h1>)}
    </section>
  );
}

export default App;
