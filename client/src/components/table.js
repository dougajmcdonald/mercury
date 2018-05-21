import React from 'react'
import styled from 'styled-components'

import { size, colour } from '../style/theme'

const Table = styled.table`
  margin: ${size.formpadding};
  background-color: ${colour.background};
  border-collapse: collapse;
  width: calc(100% - ${size.formpadding} - ${size.formpadding});

  thead {
    text-align: left;
  }

  thead > tr > th {
    border-bottom: 1px solid ${colour.white};
    font-weight: normal;
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