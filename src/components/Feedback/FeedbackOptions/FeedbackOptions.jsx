import PropTypes from 'prop-types';

import s from './feedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const elements = options.map((option, index) => {
    return (
      <li className={s.item} key={index}>
        <button
          className={s.btn}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      </li>
    );
  });
  return <ul className={s.list}>{elements}</ul>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
