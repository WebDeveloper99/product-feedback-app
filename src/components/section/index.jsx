
import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Container, SectionHead, SectionBody, SectionFooter, AntButton, Link } from './style'
import { SuggestionsContext } from '../../context/suggestion/SuggContext'

const Section = () => {

  const [sugg_mock, setSugg_Mock] = useContext(SuggestionsContext)
  var planned = [];
  var progress = [];
  var live = [];

  const counterSort =(sugg_mock)=>{

    planned = sugg_mock.filter((value)=>{
      return(
        value.feedback_status === 1 && value
      )
    })

    progress = sugg_mock.filter((value)=>{
      return(
        value.feedback_status === 2 && value
      )
    })

    live = sugg_mock.filter((value)=>{
      return(
        value.feedback_status === 3 && value
      )
    })
  }

  counterSort(sugg_mock)


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
          <SectionFooter.LI>Planned <b>{planned.length}</b> </SectionFooter.LI>
          <SectionFooter.LI>In-Progress <b>{progress.length}</b> </SectionFooter.LI>
          <SectionFooter.LI>Live <b>{live.length}</b> </SectionFooter.LI>
        </SectionFooter.UL>
      </SectionFooter>
    </Container>
    <Outlet/>
    </React.Fragment>
  )
}

export default Section