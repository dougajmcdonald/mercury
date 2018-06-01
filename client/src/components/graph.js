import React from 'react'
import styled from 'styled-components'
import Neo4JD3 from 'neo4jd3'

import TableTitle from './tabletitle'
import Panel from './panel'

import { size } from '../style/theme'

const GraphGrid = styled.section`
  display: grid;
  grid-template-rows: 40px 1fr;

  p {
    padding: ${size.formpadding};
  }

  #graph {
    height: 740px;
  }
`

const GraphContainer = styled.div`
  width: 100%;
`

class Graph extends React.Component {

  componentDidMount() {
    this.props.getGraph()
  }

  componentDidUpdate(prevProps, prevState) {

    const { data } = this.props;

    if(data) {
      new Neo4JD3('#graph', {
        neo4jData: data,
        minCollision: 75,
        nodeRadius: 20
      })
    }
  }

  render() {
    return <GraphGrid>
      <TableTitle>Graph visualisation</TableTitle>
      <Panel>
        <GraphContainer id="graph"></GraphContainer>
      </Panel>
    </GraphGrid>
  }

}

export default Graph