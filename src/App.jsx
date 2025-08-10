import { useState, useEffect } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <main className="app">
      <Navbar />
      <header className="app-header">
        <h1 className="app-title">Latest Posts</h1>
        <p className="app-subtitle">Fetched from JSONPlaceholder API</p>
      </header>

      <section className="card-grid">
        {data.map((post) => (
          <Card key={post.id} title={post.title} body={post.body} />
        ))}
      </section>
    </main>
  );
}

export default App;
