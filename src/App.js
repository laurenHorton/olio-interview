import "./App.css";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import ArticleDetailsPage from "./pages/ArticleDetailsPage";

function App() {
  return (
    <div className="App">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
          integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
          crossorigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
          integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
          crossorigin=""
        ></script>
      </Helmet>
      <Router>
        <Routes>
          <Route
            exact
            path="/article/:id"
            element={<ArticleDetailsPage />}
          ></Route>
          <Route exact path="/" element={<ArticlePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
