import Format from './Format';

const rules = {
  onChange: {
    2: ' ',
    5: ' ',
  },
};

export default (props) => (
  <Format
    {...props}
    rules={rules} />
);
