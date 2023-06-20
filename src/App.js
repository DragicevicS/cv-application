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
        workExperience: [{ id: 0, job: '', company: '', jobFrom: '', jobTo: '', jobDescription: '' }],
        education: [{ id: 0, degree: '', institution: '', eduFrom: '', eduTo: '', eduDescription: '' }],
        nextId: 1,
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

  handleWorkExpInputChange = (e, id) => {
    const { id: inputId, value } = e.target;
    this.setState((prevState) => {
      const workExperience = prevState.formData.workExperience.map((workExp) =>
        workExp.id === id
          ? { ...workExp, [inputId]: value }
          : workExp
      );
      return {
        formData: {
          ...prevState.formData,
          workExperience,
        },
      };
    });
  };

  handleAddWorkExpForm = () => {
    this.setState((prevState) => {
      const workExperience = [
        ...prevState.formData.workExperience,
        {
          id: prevState.formData.nextId,
          job: '',
          company: '',
          jobFrom: '',
          jobTo: '',
          jobDescription: '',
        },
      ];
      return {
        formData: {
          ...prevState.formData,
          workExperience,
          nextId: prevState.formData.nextId + 1,
        },
      };
    });
  };

  handleDeleteWorkExpForm = (id) => {
    this.setState((prevState) => {
      const workExperience = prevState.formData.workExperience.filter(
        (workExp) => workExp.id !== id
      );
      return {
        formData: {
          ...prevState.formData,
          workExperience,
        },
      };
    });
  };

  handleEducationInputChange = (e, id) => {
    const { id: inputId, value } = e.target;
    this.setState((prevState) => {
      const education = prevState.formData.education.map((edu) =>
        edu.id === id
          ? { ...edu, [inputId]: value }
          : edu
      );
      return {
        formData: {
          ...prevState.formData,
          education,
        },
      };
    });
  };

  handleAddEducationForm = () => {
    this.setState((prevState) => {
      const education = [
        ...prevState.formData.education,
        {
          id: prevState.formData.nextId,
          degree: '',
          institution: '',
          eduFrom: '',
          eduTo: '',
          educationDescription: '',
        },
      ];
      return {
        formData: {
          ...prevState.formData,
          education,
          nextId: prevState.formData.nextId + 1,
        },
      };
    });
  };

  handleDeleteEducationForm = (id) => {
    this.setState((prevState) => {
      const education = prevState.formData.education.filter(
        (edu) => edu.id !== id
      );
      return {
        formData: {
          ...prevState.formData,
          education,
        },
      };
    });
  };

  render() {
    const { formData } = this.state;
    return (
      <div className="App">
        <h1>CV Application</h1>
        <div className="main-container">
          <Editor
            formData={formData}
            onInputChange={this.handleInputChange}
            onFileChange={this.handleFileChange}
            onWorkExpInputChange={this.handleWorkExpInputChange}
            onAddWorkExpForm={this.handleAddWorkExpForm}
            onDeleteWorkExpForm={this.handleDeleteWorkExpForm}
            onEducationInputChange={this.handleEducationInputChange}
            onAddEducationForm={this.handleAddEducationForm}
            onDeleteEducationForm={this.handleDeleteEducationForm}
          />
          <Preview {...formData} />
        </div>
      </div>
    );
  };
};

export default App;
