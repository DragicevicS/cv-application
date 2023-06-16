import { Component } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        name: '',
        title: '',
        number: '',
        email: '',
        linkedin: '',
        github: '',
        location: '',
        about: '',
      }  
    };
  };

  handleFormChange = (e) => {
    const { id, value } = e.target;
    this.setState((prevState) => ({
      personalInfo: {
        ...prevState.personalInfo,
        [id]: value,
      },
    }));
  };

  render() {
    const { personalInfo } = this.state;
    return (
      <div className="App">
        <h1>CV Application</h1>
        <div className="main-container">
          <Editor onChange={this.handleFormChange} />
          <Preview {...personalInfo} />
        </div>
      </div>
    );
  };
};

export default App;
