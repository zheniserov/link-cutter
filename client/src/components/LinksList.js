import React from 'react';
import { Link } from 'react-router-dom'

export const LinksList = ({ links }) => {
    if (!links.length) {
        return <p className="center"> Links list is empty </p>
    }
    return (
        <table>
            <thead style={{fontSize:'16px'}}>
                <tr>
                    <th>№</th>
                    <th>Original</th>
                    <th>Cutted</th>
                    <th>Open</th>
                </tr>
            </thead>
            <tbody style={{fontSize:'15px'}}>
                {links.map((link, index) => {
                    return (
                        <tr key={link._id}>
                            <td style={{padding:'0'}} >{index + 1}</td>
                            <td style={{padding:'0'}} >{link.from}</td>
                            <td style={{padding:'0'}} >{link.to}</td>
                            <td style={{padding:'0', textAlign:'center'}} >
                                <Link to={`/detail/${link._id}`}>Open</Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}