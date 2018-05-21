import React from 'react'
import styled from 'styled-components'

import { size, colour } from '../style/theme'

const Button = styled.button`
  background-color: ${colour.bluewhite};
  font-size: ${size.fontbase};
  color: ${colour.black};
  padding: ${size.formpadding};
  border-radius: 2px;
  border: none;
  width: 200px;
  height: 40px;
  line-height: 22px;

  :hover {
    cursor: pointer;
    background-color: ${colour.white};
  }
`

export default Button;