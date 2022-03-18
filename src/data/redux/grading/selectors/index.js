import { StrictDict } from 'utils';
import * as base from './base';
import selected from './selected';
import nav from './nav';
import validation from './validation';

export default StrictDict({
  ...base,
  ...nav,
  selected,
  validation,
});
