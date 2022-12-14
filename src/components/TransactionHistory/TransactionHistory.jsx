import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.title_lines}>
          <th className={css.title_cells}>Type</th>
          <th className={css.title_cells}>Amount</th>
          <th className={css.title_cells}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.lines_columns}>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.lines} key={id}>
            <td className={css.cells}>{type}</td>
            <td className={css.cells}>{amount}</td>
            <td className={css.cells}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
