import React, { Component } from 'react';

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value !== this.props.counter.value) return null;
  }

  render() {
    return (
      <div className="row">
        <h4>Counter #{this.props.counter.id}</h4>
        <div className="col-1">
          <span className={this.getBasdgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="row">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm  m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm  m-2"
            disabled={!this.props.counter.value}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            x
          </button>
        </div>
      </div>
    );
  }

  getBasdgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += !!this.props.counter.value ? 'primary' : 'warning';
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return !!value ? value : 'Zero';
  }
}

export default Counter;
