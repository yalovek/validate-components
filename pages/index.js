import { Component } from 'react';
import { InputDriverLicense } from '../components';

class Page extends Component {
  constructor(props) {
    super(props);

    const { driverLicenseIsValid:driverLicenseIsValid = true } = props;

    this.state = {
      driverLicenseValue: props.driverLicenseValue,
      driverLicenseIsValid,
      driverLicenseMessage: props.driverLicenseMessage,
    };
  }

  onDriverLicenseValidation(driverLicenseMessage) {
    this.setState({
      driverLicenseIsValid: !driverLicenseMessage,
      driverLicenseMessage,
    });
  }

  onDriverLicenseFormating(driverLicenseValue) {
    this.setState({
      driverLicenseValue,
    });
  }

  render() {
    const { driverLicenseValue, driverLicenseIsValid, driverLicenseMessage } = this.state;

    return (
      <InputDriverLicense
        value={driverLicenseValue}
        isValid={driverLicenseIsValid}
        message={driverLicenseMessage}
        onFormatting={value => this.onDriverLicenseFormating(value)}
        onValidation={message => this.onDriverLicenseValidation(message)} />
    );
  }
};

export default () => (<Page />);
