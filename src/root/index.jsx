
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from './style'

import Suggestions from '../pages/suggestions'
import NewFeedback from '../pages/new_feedback'
import RoadMap from '../pages/roadMap'
import EditFeedback from '../pages/edit_feedback'
import FeedbackDetail from '../pages/feedback_detail'

import Section from '../components/section'
import Navbar from '../components/navbar'

const Root = () => {
  return (
    <Container>
      <Routes>
        <Route path={'/'} element={<Navbar/>} >
          <Route path={'/'} element={<Section/>} >
            <Route path={'/'} element={<Suggestions/>} />
          </Route>
        </Route>
        <Route path={'/feedbackDetail'} element={<FeedbackDetail/>} />
        <Route path={'/newFeedback'} element={<NewFeedback/>} />
        <Route path={'/roadMap'} element={<RoadMap/>} />
        <Route path={'/editFeedback'} element={<EditFeedback/>} />
      </Routes>
    </Container>
  )
}

export default Root