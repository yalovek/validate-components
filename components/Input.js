import { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);

    const { isValid:isValid = true } = props;

    this.state = {
      value: props.value,
      isValid,
      message: props.message,
    };
  }

  componentWillReceiveProps({ value, isValid, message }) {
		this.setState({
      value,
			isValid,
			message,
		});
	}

  triggerCallback({ name, value }) {
    const { [name]:callback } = this.props;

    if (callback !== undefined) {
      callback(value);
    }
  }

  onChange(e) {
    this.triggerCallback({
      name: 'onChange',
      value: e,
    });
  }

  onBlur(e) {
    this.triggerCallback({
      name: 'onBlur',
      value: e,
    });
  }

  render() {
    const { value, isValid, message } = this.state;

    return (
      <div>
        <input
          value={value}
          onChange={e => this.onChange(e)}
          onBlur={e => this.onBlur(e)} />

        {isValid ? '' : (<p>{message}</p>)}
      </div>
    );
  }
};
