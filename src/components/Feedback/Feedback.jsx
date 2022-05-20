import {Component} from 'react'

import Statistics from './Statistics'
import FeedbackOptions from './FeedbackOptions'
import Section from '../Section'
import Notification from '../Notification'


const options = ['good', 'neutral', 'bad']

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = (option) => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1
      }
    })
  }

  countTotalFeedback() {
    const {good, neutral, bad} = this.state
    return (good + neutral + bad);
  }

  countPositiveFeedbackPercentage() {
        return Math.round((this.state.good / this.countTotalFeedback()) * 100)
  }

  render() {
    const { good, neutral, bad } = this.state
    let total = this.countTotalFeedback()
    let positivePercentage = this.countPositiveFeedbackPercentage()
    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        {!total && <Notification message="There is no feedback" />}
        {total > 0 && <Section title='Statistics'>
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
        </Section>}
      </>
    )
  }
}

export default Feedback
