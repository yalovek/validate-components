import FormatDriverLicense from './FormatDriverLicense';
import ValidateDriverLicense from './ValidateDriverLicense';
import Input from './Input';

export default (props) => (
  <FormatDriverLicense {...props}>
    <ValidateDriverLicense>
      <Input/>
    </ValidateDriverLicense>
  </FormatDriverLicense>
);
