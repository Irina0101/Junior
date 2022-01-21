class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }
  increment = () => this.setState({counter: this.state.counter +1});
  decrement = () => {
    if (counter > 0){
      this.setState({counter: this.state.counter -1});
    }
  };
  render() {
    const { counter } = this.state;
    return React.createElement(
      React.Fragment,
      null, 
      React.createElement ('h1, null, counter'),
      React.createElement (
        'button',
        {
          onClick: this.decrement,
        },
        '-'
      ),
      React.createElement(
        'button',
        {
          onClick: this.increment,
        },
        '+'
      )
    );
  }
}

ReactDOM.render(React.createElement(Counter), document.getElementById('root'));