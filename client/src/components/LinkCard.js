import React from 'react';


export const LinkCard = ({ link }) => {
    return(
        <div>
            <h2>Link</h2>
            <p style={{fontSize:"22px"}} >New Link: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
            <p style={{fontSize:"22px"}} >Where: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
            <p style={{fontSize:"22px"}} >Clicks: <strong>{link.clicks}</strong></p>
            <p style={{fontSize:"22px"}} >Creation date: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
            
        </div>
    )
}