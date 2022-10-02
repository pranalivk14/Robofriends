import React from 'react';

function Card({name, email, id}) {
    
    return (
        <div className='tc bg-light-blue dib br3 pa3 ma3 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?size=250x250`} />
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    );  
}

export default Card;