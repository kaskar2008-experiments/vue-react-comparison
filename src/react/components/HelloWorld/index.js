import React, { Context } from 'react';

import './styles.styl';

export class HelloWorldClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qwe: '654687684',
    };
  }

  render() {
    return (
      <div className="hello">
        <h1>{this.state.qwe}</h1>
        <input type="text" value={this.state.qwe} onChange={() => this.onInput()} />
      </div>
    );
  }

  onInput(e) {
    console.log('EVENT', e, this.state);
  }

  componentDidMount() {
    this.setState({
      qwe: this.state.qwe + this.props.msg
    })
  }
}
