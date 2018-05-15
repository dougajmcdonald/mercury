import React from 'react'
import styled from 'styled-components'

import notification from '../img/md-notifications.svg'
import person from '../img/md-person.svg'

const UserPanelGrid = styled.section`
  grid-row: 1 / 3;
  display: grid;

  grid-template-rows: 1fr 1fr;
  grid-template-columns: 60px 1fr;

  line-height: 40px;
`

const Icon = styled.img`
  width: 40px;
  height: 40px;
`

const UserPanel = () =>
  <UserPanelGrid>
    <Icon src={person} /> John Smith
    <Icon src={notification} /> 4 Notifications
  </UserPanelGrid>

export default UserPanel