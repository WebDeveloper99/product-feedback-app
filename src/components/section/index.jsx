
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container, SectionHead, SectionBody, SectionFooter, AntButton, Link } from './style'

const Section = () => {
  return (
    <React.Fragment>
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
          <SectionFooter.LI>Planned <b>3</b> </SectionFooter.LI>
          <SectionFooter.LI>In-Progress <b>2</b> </SectionFooter.LI>
          <SectionFooter.LI>Live <b>1</b> </SectionFooter.LI>
        </SectionFooter.UL>
      </SectionFooter>
    </Container>
    <Outlet/>
    </React.Fragment>
  )
}

export default Section