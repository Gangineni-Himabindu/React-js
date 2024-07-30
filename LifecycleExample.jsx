import React, { Component } from 'react';

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
    console.log('Constructor: Component is being constructed');
  }

  componentDidMount() {
    console.log('componentDidMount: Component has mounted');
    // Simulate an API call
    setTimeout(() => {
      this.setState({ data: 'Data fetched from API' });
    }, 2000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Deciding whether to update');
    // Only update if data has changed
    return nextState.data !== this.state.data;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Component has updated');
    if (prevState.data !== this.state.data) {
      console.log('Data has changed:', this.state.data);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to unmount');
  }

  render() {
    console.log('Render: Component is rendering');
    return (
      <div>
        <h1>Lifecycle Example</h1>
        <p>Data: {this.state.data || 'Loading...'}</p>
      </div>
    );
  }
}

export default LifecycleExample;
