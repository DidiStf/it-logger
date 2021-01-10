import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

import TechSelectOptions from '../techs/TechSelectOptions';

import { updateLogAction } from '../../store/actions/log';
import { select as selectLog } from '../../store/selectors/log';

const EditLogModal = () => {
    const dispatch = useDispatch();
    const { current } = useSelector(selectLog);
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if (message === '' || tech === '') M.toast({ html: 'Please enter a message and tech' });
        else {
            const updateLog = {
                id: current.id,
                message,
                attention,
                tech,
                date: new Date(),
            }

            dispatch(updateLogAction(updateLog));
            M.toast({ html: `Log updated by ${tech}` })

            // Clear fields
            setAttention(false);
            setMessage('');
            setTech('');
        }
    };

    useEffect(() => {
        if (current) {
            const { attention, message, tech } = current;
            setMessage(message);
            setAttention(attention);
            setTech(tech);
        }
    }, [current]);

    return (
        <div  id="edit-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select
                            name="tech"
                            value={tech}
                            className="browser-default"
                            onChange={(e) => setTech(e.target.value)}
                        >
                            <option
                                value=""
                                disabled
                            >
                                Select Technician
                            </option>
                            < TechSelectOptions />
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                      <p>
                          <label>
                            <input
                                type="checkbox"
                                className="filled-in"
                                checked={attention}
                                value={attention}
                                onChange={() => setAttention(!attention)}
                            />
                            <span>Needs Attention</span>
                          </label>
                      </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a
                    href="#!"
                    onClick={onSubmit}
                    className="modal-close waves-effect blue btn"
                >
                    Enter
                </a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%',
}

export default EditLogModal;
