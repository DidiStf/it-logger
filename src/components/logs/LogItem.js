import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import M from 'materialize-css/dist/js/materialize.min';

import { deleteLogAction, setCurrentLogAction } from '../../store/actions/log';

const LogItem = ({ log }) => {
  const dispatch = useDispatch();
  const { id, attention, date, message, tech } = log;

  const onDelete = () => {
    dispatch(deleteLogAction(log.id));
    M.toast({ html: 'Log Deleted' });
  }

  const setCurrent = () => {
    dispatch(setCurrentLogAction(log));
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          onClick={setCurrent}
          className={`modal-trigger ${
            attention ? 'red-text' : 'blue-text'
          }`}>
          {message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{id}</span> last updated by{' '}
          <span className='black-text'>{tech}</span> on{' '}
          <Moment format='MMMM DoYYYY,h:mm:ss a'>{date}</Moment>
        </span>
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
