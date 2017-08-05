import Validate from './Validate';

const REG_EXP = /^\d{2} ([АВСЕНКМОРТХУавсенкмортхуABCEHKMOPTXYabcehkmoptxy]{2}|\d{2}) \d{6}$/;
const rules = {
  onBlur: [
    {
      test: value => REG_EXP.test(value),
      message: 'error',
    },
  ],
};

export default (props) => (
  <Validate
    {...props}
    rules={rules} />
);
