import { useGlobalContext } from "./context";

function App() {

  const { movies } = useGlobalContext()


  return (
    <section>
      {movies.map((m) => <h1>{m.titleText.text}</h1>)}
    </section>
  );
}

export default App;
