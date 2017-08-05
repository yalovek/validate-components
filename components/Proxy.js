import { createElement } from 'react';

const triggerCallback = ({ name, value, props }) => {
  const { [name]:callback } = props;

  if (callback !== undefined) {
    callback(value);
  }
};

export default (_props) => {
  const { children, rules, callback, method } = _props;
  const { type, props:props = {} } = children;
  const propsCallback = _props[callback];

  return createElement(type, Object.assign({}, _props, props, Object.keys(rules).reduce((result, event) => {
    return Object.assign({}, result, {
      [event](e) {
        const { target } = e;
        const { value } = target;

        propsCallback(method({ rules, event, value }));

        triggerCallback({
          name: event,
          value: e,
          props,
        });

        triggerCallback({
          name: event,
          value: e,
          props: _props,
        });
      },
    });
  }, {})));
};
