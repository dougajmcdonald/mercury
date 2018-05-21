import React from 'react'
import styled from 'styled-components'

import { size, colour } from '../style/theme'

const Table = styled.table`
  background-color: ${colour.background};
  color: ${colour.black};
  padding: ${size.formpadding};
  border-collapse: collapse;

  thead {
    text-align: left;
  }

  thead > tr > th {
    border-bottom: 1px solid ${colour.white};
  }

  tr {
    line-height: 30px;
  }

  td, th {
    padding: ${size.formpadding};
  }

  tbody > tr {
    :hover {
      background-color: ${colour.backgroundlight};
      cursor: pointer;
    }
  }
`

export default Table