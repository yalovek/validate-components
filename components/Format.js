import Proxy from './Proxy';

const getPlaseholderPosition = (keys, key) => keys.find((index) => index === key);
const isPlaseholderPosition = (keys, key) => getPlaseholderPosition(keys, key) === key;
const getValueWithPlaceholder = (result, value, placeholder) => value === placeholder
  ? result + value
  : `${result}${placeholder}${value}`;
const reduceValue = ({ rules, event }) =>
  (result, value, key) => isPlaseholderPosition(Object.keys(rules[event]), key.toString())
    ? getValueWithPlaceholder(result, value, rules[event][key])
    : result + value;
const method = ({ rules, event, value }) => value.split('').reduce(reduceValue({ rules, event }), '');

export default (props) => (
  <Proxy
    {...props}
    callback="onFormatting"
    method={method} />
);
