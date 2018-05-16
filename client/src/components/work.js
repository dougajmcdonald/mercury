import React from 'react'
import styled from 'styled-components'

import { size, colour } from '../style/theme'

import Apple from '../img/logo-apple.svg'
import Android from '../img/logo-android.svg'
import Windows from '../img/logo-windows.svg'
import Phone from '../img/md-phone-portrait.svg'
import Tablet from '../img/md-tablet-landscape.svg'
import Desktop from '../img/md-desktop.svg'

const WorkGrid = styled.section`
  display: grid;
  padding: ${size.grid};
  background-color: ${colour.backgroundlight};
`

const Icon = styled.img`
  width: 25px;
  height: 25px;
  padding-left: ${size.tabpadding};
  padding-right: ${size.tabpadding};
`

const ExhibitGrid = styled.section`
  display: grid;
  grid-template-rows: 40px 1fr;
  overflow-y: auto;
`

const TableTitle = styled.h2`
  color: ${colour.orange};
  margin: 0;
  font-weight: 400;
  font-size: ${size.fontbase};
`

const ExhibitTable = styled.table`
  background-color: ${colour.bluewhite};
  color: ${colour.black};
  padding: ${size.formpadding};

  thead {
    text-align: left;
  }

  thead > tr > th {
    border-bottom: 1px solid ${colour.black};
  }

  tr {
    line-height: 60px;
  }
`

class Work extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      exhibits: [
        {
          operation: 'TOADSTOOL',
          reference: 'ZZZ/9',
          priority: 'Useful',
          classificationtext: 'Android phones',
          icons: ['android', 'phone'],
          description: 'Test exhibit'
        },
        {
          operation: 'FLACID PANDA',
          reference: 'ABC/12',
          priority: 'Useful',
          classificationtext: 'Apple tablets',
          icons: ['apple', 'tablet'],
          description: 'Test exhibit 2'
        },
        {
          operation: 'RANDY DONKY',
          reference: 'MUL/6',
          priority: 'Interesting',
          classificationtext: 'Windows desktops',
          icons: ['windows', 'desktop'],
          description: 'Test exhibit 3'
        }
      ]
    }
  }

  getIcons(icons) {
    return icons.map((icon, index) => this.getSVGIcon(icon, index))
  }

  getSVGIcon(iconText, index) {
    switch (iconText) {
      case 'apple':
        return <Icon key={iconText + index} src={Apple} />
      case 'android':
        return <Icon key={iconText + index} src={Android} />
      case 'windows':
        return <Icon key={iconText + index} src={Windows} />
      case 'phone':
        return <Icon key={iconText + index} src={Phone} />
      case 'tablet':
        return <Icon key={iconText + index} src={Tablet} />
      case 'desktop':
        return <Icon key={iconText + index} src={Desktop} />
      default:
        break;
    }
  }

  render() {
    return <WorkGrid>
      <ExhibitGrid>
        <TableTitle>Your Exhibits</TableTitle>
        <ExhibitTable>
          <thead>
            <tr>
              <th>Operation</th>
              <th>Exhibit Ref.</th>
              <th>Priority</th>
              <th>Classification</th>
              <th></th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.exhibits.map(exhibit =>
              <tr key={exhibit.reference}>
                <td>{exhibit.operation}</td>
                <td>{exhibit.reference}</td>
                <td>{exhibit.priority}</td>
                <td>{exhibit.classificationtext}</td>
                <td>{this.getIcons(exhibit.icons)}</td>
                <td>{exhibit.description}</td>
              </tr>
            )}
          </tbody>
        </ExhibitTable>
      </ExhibitGrid>
    </WorkGrid>
  }
}

export default Work