import React, { useState } from 'react';
import Container from 'components/Container';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';

const State = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [state, setState] = useState(State);

  const handleIncrementFeedback = option => {
    setState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (state.good / countTotalFeedback()) * 100;
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        {' '}
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={handleIncrementFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  );
}
