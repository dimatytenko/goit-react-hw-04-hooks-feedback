import PropTypes from 'prop-types';
import style from './Feeedback.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={style.FeedbackOptions}>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            className={style.FeedbackOptions__button}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
