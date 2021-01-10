import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { searchLogsAction } from '../../store/actions/log';

const SearchBar = () => {
  const dispatch = useDispatch();
  const text = useRef('');

  const searchLogs = () => {
    dispatch(searchLogsAction(text.current.value))
  }

  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input id='search' type='search' required placeholder="Search Logs..." ref={text} onChange={searchLogs} />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
