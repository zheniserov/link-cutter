import React, {useState, useEffect, useContext} from 'react';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { AuthContext } from '../context/AuthContext';

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage();
    const { loading, error, request, clearError } = useHttp();

    const [form, setForm] = useState({
        email:'',
        password:''
    });

    useEffect(() => {
        message(error);
        clearError();  
    }, [error, message, clearError]);

    useEffect(() => {
        window.M.updateTextFields();
    }, [])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value});
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form});
            message(data.message);
        } catch (err) {
            
        }
    };
    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form});
            auth.login(data.token, data.userId)
        } catch (err) {
            
        }
    };

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>link cutter</h1>
                <div className="card deep-purple lighten-1">
                    <div className="card-content white-text">
                        <span className="card-title">Authorization</span>
                        <div>
                            <div className="input-field">
                                <input placeholder="Email " id="email" type="text" name="email" className="inputs" onChange={changeHandler} value={form.login} />
                                    <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input placeholder="Password " id="password" type="password" name="password" className="inputs" onChange={changeHandler} value={form.password} />
                                    <label htmlFor="password">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action" style={{ display: "flex", justifyContent: "space-between" }}>
                        <button 
                            className="waves-effect waves-light btn grey white deep-purple-text lighten-1-text" 
                            style={{ width: "40%" }}
                            onClick={loginHandler}
                            disabled={loading}
                        >Login</button>
                        <button 
                            className="waves-effect waves-light btn grey white deep-purple-text lighten-1-text" 
                            style={{ width: "40%" }}
                            onClick={registerHandler}
                            disabled={loading}
                        >Register</button>
                    </div>
                </div>
            </div>
        </div>
            )
        }
