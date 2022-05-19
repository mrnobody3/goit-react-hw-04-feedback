import PropTypes from 'prop-types'

import s from './statistics.module.css'

const Statistics = ({good ,neutral, bad, total, positivePercentage}) => {
  return (
    <ul className={s.list}>
      <li className={s.item}><p>Good: <span className={s.value}>{good}</span></p></li>
      <li className={s.item}><p>Neutral: <span className={s.value}>{neutral}</span></p></li>
      <li className={s.item}><p>Bad: <span className={s.value}>{bad}</span></p></li>
      <li className={s.item}><p>Total: <span className={s.value}>{total}</span></p></li>
      <li className={s.item}><p>Positive feedback: <span className={s.value}>{positivePercentage}%</span></p></li>
    </ul>
  )
}

export default Statistics

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
}