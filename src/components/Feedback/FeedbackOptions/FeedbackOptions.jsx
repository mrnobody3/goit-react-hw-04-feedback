import PropTypes from 'prop-types'

import s from './feedbackOptions.module.css'


const FeedbackOptions = ({increaseRating}) => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <button className={s.btn} type='button' onClick={() => {
          increaseRating('good')
        }}>Good</button>
      </li>
      <li className={s.item}>
        <button className={s.btn} type='button' onClick={() => {
          increaseRating('neutral')
        }}>Neutral</button>
      </li>
      <li className={s.item}>
        <button className={s.btn} type='button' onClick={() => {
          increaseRating('bad')
        }}>Bad</button>
      </li>
    </ul>
  )
}

export default FeedbackOptions

FeedbackOptions.propTypes = {
  increaseRating: PropTypes.func.isRequired
}