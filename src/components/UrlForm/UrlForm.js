import React, { Component } from 'react';

class UrlForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const newURL = {
      id: Date.now(),
      ...this.state
    }
    this.clearInputs();

    fetch('http://localhost:3001/api/v1/urls', {
      method: 'POST',
      body: JSON.stringify(newURL),
      headers: {'Content-Type': "application/json"}
    })
    .then(response => response.json())
    .then(data => this.props.addURL(data))
    }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
        />

        <button onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
