
import { Container } from '@mui/system';
import React from 'react'
import { Bio } from '../../constants';
import { SectionDesc,Span,Document,Title,SectionContent } from './AboutmeStyle';


function Aboutme() {
  return (
    <Container>
    <Title>
    <h1>ABOUT ME</h1>
    </Title>


    <SectionDesc>
        <SectionContent>
    {Bio.description}
    </SectionContent>
    </SectionDesc>
    </Container>
  )
}

export default Aboutme