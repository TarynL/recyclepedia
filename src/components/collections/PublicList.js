import React, { useState, useEffect } from 'react';
import { PublicCard } from './PublicCard';
import { getAllRecyclables } from '../../modules/PublicListManager';
// import {useHistory} from 'react-router-dom'

export const PublicList = () => {

    const [publics, setPublics] = useState([]);
    // const history = useHistory();

    const getPublicRecyclables = () => {
        return getAllRecyclables()
            .then(res => {
                setPublics(res)
            });
    };
    
    
    

    useEffect(() => {
        getPublicRecyclables();
    }, []);

    

    return (
        <> 
           
            <div className="container-cards">
                {publics.map(recyclable =>
                    < PublicCard 
                        key={recyclable.id}
                        recyclable={recyclable}
                        
                    />)}
            </div>
        </>
    )
}