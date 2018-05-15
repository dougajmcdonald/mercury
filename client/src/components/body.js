import React from 'react'
import styled from 'styled-components'

import { size, colour } from '../style/theme'

const BodyGrid = styled.main`
  margin: ${size.grid};

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
`

const Body = ({ msg }) =>
  <BodyGrid>
    {msg}
  </BodyGrid>

export default Body