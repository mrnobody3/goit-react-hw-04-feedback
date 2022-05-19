import {Component} from 'react'

import Statistics from './Statistics'
import FeedbackOptions from './FeedbackOptions'
import Section from '../Section'
import Notification from '../Notification'

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0
  }

  increaseRating = (rating) => {

    this.setState(prevState => {
      return {
        [rating]: prevState[rating] + 1
      }
    })

    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }

  countTotalFeedback() {
    this.setState(({ good, neutral, bad}) => {
      return {
        total: good + neutral + bad
      }   
    })
  }

  countPositiveFeedbackPercentage() {
    this.setState(({ total, good }) => {
      return {
        positivePercentage: Math.round((good / total) * 100)
      }
    })
  }

  render() {
    const {good, neutral, bad, total, positivePercentage } = this.state

    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions increaseRating={this.increaseRating} />
        </Section>
        {total > 0 ? <Section title='Statistics'>
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
        </Section> : <Notification message="There is no feedback" />}
        
        
      </>
    )
  }
}

export default Feedback
