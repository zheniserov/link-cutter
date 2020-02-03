import React, { useState, useEffect, useContext } from 'react';
import {useHistory} from 'react-router-dom';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';

export const CreatePage = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const { request } = useHttp();
    const [link, setLink] = useState('');

    useEffect(() => {
        window.M.updateTextFields();
    }, [])

    const pressHandler = async event => {
        if (event.key === 'Enter') {
            try {
                const data = await request('/api/link/generate', 'POST', { from: link }, {
                    Authorization: `Bearer ${auth.token}`
                });
                history.push(`/detail/${data.link._id}`)
            } catch (err) { console.log(err.message); }
        }
    }

    return (
        <div className="row">
            <div className="col s8 offset-s2">
                <div className="input-field">
                    <input placeholder="Enter link " id="link" type="text" className="inputs" onChange={event => setLink(event.target.value)} value={link} onKeyPress={pressHandler} />
                    <label htmlFor="email">Email</label>
                </div>
            </div>
        </div>
    )
}
