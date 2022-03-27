
import React from 'react'
import { Container, SectionHead, SectionBody, SectionFooter, AntButton, Link } from './style'

const Section = () => {
  return (
    <Container>
      <SectionHead>
        <SectionHead.Title>
          <div className='title' >Frontend Mentor</div>
          <div className='desc' >Feedback board</div>
        </SectionHead.Title>
      </SectionHead>
      <SectionBody>
        <AntButton>All</AntButton>
        <AntButton>UI</AntButton>
        <AntButton>UX</AntButton>
        <AntButton>Enhancement</AntButton>
        <AntButton>Bug</AntButton>
        <AntButton>Feature</AntButton>
      </SectionBody>
      <SectionFooter>
        <SectionFooter.Title>
          Roadmap <Link to={'/roadmap'} >View</Link>
        </SectionFooter.Title>
        <SectionFooter.UL>
          <SectionFooter.LI>Planned</SectionFooter.LI>
          <SectionFooter.LI>In-Progress</SectionFooter.LI>
          <SectionFooter.LI>Live</SectionFooter.LI>
        </SectionFooter.UL>
      </SectionFooter>
    </Container>
  )
}

export default Section