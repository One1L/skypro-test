import { Select, MenuItem } from "@mui/material";
import { ReactComponent as ArrowIcon } from '../../res/icons/arrow.svg';
import './styles.scss';

const StyledSelect = (props) => <Select
  value="price-asc"
  IconComponent={ArrowIcon}
  classes={{select: 'styled-select__select', icon: 'styled-select__icon'}}
  {...props}
  className={`styled-select ${props.className}`}
>
  <MenuItem value="price-asc">Порядок: сперва новые</MenuItem>
  <MenuItem value="price-desc">Порядок: сперва дороже</MenuItem>
</Select>;

export default StyledSelect;