import React from 'react'
import styled from 'styled-components'

import TableTitle from './tabletitle'
import Panel from './panel'

import { size } from '../style/theme'

const OperationGrid = styled.section`
  display: grid;
  grid-template-rows: 40px 1fr;

  p {
    padding: ${size.formpadding};
  }
`

const OperationForm = ({ operation }) =>
  <OperationGrid>
    <TableTitle>{operation && operation.operation}</TableTitle>
    <Panel>
      <p>Operation details</p>
    </Panel>
  </OperationGrid>

export default OperationForm