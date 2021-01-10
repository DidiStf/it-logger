import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TechItem from './TechItem';

import { getTechsAction } from '../../store/actions/tech';
import { select as selectTech } from '../../store/selectors/tech';

const TechListModal = () => {
  const dispatch = useDispatch();
  const { techs, loading } = useSelector(selectTech);

  useEffect(() => {
    dispatch(getTechsAction());
  }, [dispatch]);

  return (
      <div id="tech-list-modal" className="modal">
          <div className="modal-content">
              <h4>Technicians List</h4>
              <ul className="collection">
                {!loading && techs !== null && techs.map((tech) => (
                    <TechItem tech={tech} key={tech.id} />
                ))}
              </ul>
          </div>
      </div>
  )
};

export default TechListModal;
