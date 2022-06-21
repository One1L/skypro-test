import { Input } from '@mui/material';
import './styles.scss';

const StyledInput = (props) =>
  <Input {...props}
    className={`styled-input ${props.className}`} classes={{input: 'styled-input__input'}}
  />;

export default StyledInput;