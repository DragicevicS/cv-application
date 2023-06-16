import { Component } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        title: '',
        number: '',
        email: '',
        location: '',
        linkedin: '',
        github: '',
        about: '',
        picture: '',
        color: '',
      }  
    };
  };

  handleInputChange = (e) => {
    const { id, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [id]: value,
      },
    }));
  };

  handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.setState((prevState) => ({
        formData: {
          ...prevState.formData,
          picture: reader.result,
        },
      }));
    };

    if (file) reader.readAsDataURL(file);
  };

  render() {
    const { formData } = this.state;
    return (
      <div className="App">
        <h1>CV Application</h1>
        <div className="main-container">
          <Editor onInputChange={this.handleInputChange} onFileChange={this.handleFileChange} />
          <Preview {...formData} />
        </div>
      </div>
    );
  };
};

export default App;
