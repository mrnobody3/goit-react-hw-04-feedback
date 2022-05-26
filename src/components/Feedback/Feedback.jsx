import { useState } from 'react';

import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';

const options = ['good', 'neutral', 'bad'];

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = option => {
    setFeedbacks(prevState => {
      return {
        ...feedbacks,
        [option]: prevState[option] + 1,
      };
    });
  };

  const { good, neutral, bad } = feedbacks;

  const total = good + neutral + bad;

  const positivePercentage = Math.round((good / total) * 100);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      {!total && <Notification message="There is no feedback" />}
      {total > 0 && (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      )}
    </>
  );
};

export default Feedback;
