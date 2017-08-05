import Proxy from './Proxy';

const method = ({ rules, event, value }) => {
  const valueLength = value.length;
  const error = rules[event].find((rule) => {
    const { length:length = 0 } = rule;

    return valueLength === length ? false : !rule.test(value);
  });

  return error !== undefined ? error.message : '';
};

export default (props) => (
  <Proxy
    {...props}
    callback="onValidation"
    method={method} />
);
