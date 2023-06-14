import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  return (
    <div className="App">
      <h1>CV Application</h1>
      <div className="main-container">
        <Editor />
        <Preview />
      </div>
    </div>
  );
};

export default App;
