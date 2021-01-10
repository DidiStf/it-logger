import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

import { getLogsAction } from '../../store/actions/log';
import { select as selectLog } from '../../store/selectors/log';

const Logs = () => {
  const dispatch = useDispatch();
  const { logs, loading } = useSelector(selectLog);

  useEffect(() => {
    const getLogs = async () => {
      await dispatch(getLogsAction());
    };
    getLogs();
  }, [dispatch]);

  return (loading || logs === null) ? (
    <Preloader />
  ) : (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show...</p>
      ) : (
        logs?.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

export default Logs;
