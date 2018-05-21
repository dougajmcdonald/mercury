import styled from 'styled-components'

import { size, colour } from '../style/theme'

const TableTitle = styled.h2`
  color: ${colour.orange};
  background-color: ${colour.backgrounddark};
  margin: 0;
  line-height: 40px;
  padding-left: ${size.formpadding};
  text-transform: uppercase;
  font-weight: 400;
  font-size: ${size.fontsmall};
  font-weight: bold;
`

export default TableTitle