import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTechsAction } from '../../store/actions/tech';
import { select as selectTech } from '../../store/selectors/tech';

const TechSelectOptions = () => {
    const dispatch = useDispatch();
    const { techs, loading } = useSelector(selectTech);

    useEffect(() => {
        dispatch(getTechsAction());
      }, [dispatch]);

    return (
       !loading && techs !== null && techs.map((t) => <option key={t.id} value={`${t.firstName} ${t.lastName}`}>{t.firstName} {t.lastName}</option>)
    )
};

export default TechSelectOptions;
