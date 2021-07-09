  
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions/index';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form>
        
      </form>
    )
  }
}
