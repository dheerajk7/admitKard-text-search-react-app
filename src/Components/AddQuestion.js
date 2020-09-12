import React, { Component, createRef } from "react";
import { APIUrls } from "../helpers/urls";
import swal from "sweetalert";

class AddQuestion extends Component {
  constructor(props) {
    super(props);
    // state to maintain form state and form ref
    this.state = {
      add_product_button_status: false,
      formRef: createRef(),
      formInput: {
        query: "",
        topic: "",
        currentTag: "",
        tagList: [],
      },
    };
  }

  // showing alert for different messages
  showAlert = (title, text, type) => {
    swal({
      title: title,
      text: text,
      icon: type,
      button: "Ok",
    });
  };

  // checking for empty field in form on submit and returning a message on that basis
  checkForEmptyField = () => {
    const { query, topic } = this.state.formInput;
    if (query.length === 0) {
      this.showAlert("Missing Field", "Please Enter Question", "warning");
      return false;
    } else if (topic.length === 0) {
      this.showAlert("Missing Field", "Please Enter Topic", "warning");
      return false;
    }
    return true;
  };

  // showing or hiding add product form on the basis of add product button state
  handleAddProductButtonStatus = () => {
    this.setState({
      add_product_button_status: !this.state.add_product_button_status,
    });
  };

  // changing the value of state on the basis of form's input change
  handleChange = (label, value) => {
    if (label === "query") {
      this.setState({
        formInput: {
          ...this.state.formInput,
          query: value,
        },
      });
    } else if (label === "topic") {
      this.setState({
        formInput: {
          ...this.state.formInput,
          topic: value,
        },
      });
    } else if (label === "currentTag") {
      this.setState({
        formInput: {
          ...this.state.formInput,
          currentTag: value,
        },
      });
    }
  };

  // adding tag to tag list on clicking add tag button
  handleAddTagButton = (e) => {
    e.preventDefault();

    if (this.state.formInput.currentTag.length === 0) {
      this.showAlert("Missing Field", "Tag Field is Empty", "warning");
      return;
    }
    const { tagList, currentTag } = this.state.formInput;
    tagList.push(currentTag);
    this.setState({
      formInput: { ...this.state.formInput, tagList: tagList, currentTag: "" },
    });
  };

  // API call for creating new question
  createNewQuestion = () => {
    const { query, tagList, topic } = this.state.formInput;
    let formBody = {
      query: query,
      tagList: tagList,
      topic: topic,
    };
    const url = APIUrls.createQuestion();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formBody),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          this.showAlert("Added", "New Question Added", "success");
          this.setState({
            formInput: {
              query: "",
              topic: "",
              currentTag: "",
              tagList: [],
            },
          });
          this.state.formRef.current.reset();
        } else {
          this.showAlert("Error", "Error in adding new question", "warning");
        }
      });
  };

  // clearing tag list on click clear tag button
  handleClearAllTag = (e) => {
    e.preventDefault();
    this.setState({ formInput: { ...this.state.formInput, tagList: [] } });
  };

  // handling submit button for creating new question
  handleSubmitButton = (e) => {
    e.preventDefault();
    let formFieldStatus = this.checkForEmptyField();
    if (!formFieldStatus) {
      return;
    }
    this.createNewQuestion();
  };

  // rendering add question component
  render() {
    const { add_product_button_status } = this.state;
    const { tagList, currentTag, topic, query } = this.state.formInput;
    return (
      <div className="add-question-container">
        <button onClick={this.handleAddProductButtonStatus}>
          {add_product_button_status ? (
            <i className="fa fa-times" aria-hidden="true"></i>
          ) : (
            "Add Question"
          )}
        </button>
        {add_product_button_status && (
          <form ref={this.state.formRef}>
            <div className="input-container">
              <div className="lable">Query :</div>
              <input
                placeholder="Query"
                onChange={(e) => {
                  this.handleChange("query", e.target.value);
                }}
                value={query}
              />
            </div>
            <div className="input-container">
              <div className="lable">Topic :</div>
              <input
                placeholder="Topic"
                onChange={(e) => {
                  this.handleChange("topic", e.target.value);
                }}
                value={topic}
              />
            </div>
            <div className="input-container">
              <div className="lable">Tags :</div>
              <input
                placeholder="Tag"
                onChange={(e) => {
                  this.handleChange("currentTag", e.target.value);
                }}
                value={currentTag}
              />
              <ul>
                {tagList.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
              <div className="tag-container-button">
                <button
                  className="tag-button"
                  onClick={this.handleAddTagButton}
                >
                  Add Tag
                </button>
                <button className="tag-button" onClick={this.handleClearAllTag}>
                  Clear All Tags
                </button>
              </div>
            </div>

            <button onClick={this.handleSubmitButton}>Add Question</button>
          </form>
        )}
      </div>
    );
  }
}

export default AddQuestion;
