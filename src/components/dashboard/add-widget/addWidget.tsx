import React, { SyntheticEvent, useContext } from 'react';
//import randomstring from 'randomstring';
import { DomainConsumerType, DomainContext, DomainDefinition } from '../domain/domain';

export const AddWidget = () => {
    const {domain, updateDomain} = useContext(DomainContext);
    const onAddWidget = (e: SyntheticEvent) => {
        const newId = Math.floor(Math.random()*1000).toString();
        updateDomain({
            ...domain,
            widgets: [...domain.widgets, {id: newId, url: '', type:'iframe' }],
            layout: [...domain.layout, 
            { i: newId, x: 0, y: 0, w: 1, h: 2 } 
            ]
        })
    };
    return <>
        < button onClick={(e) => onAddWidget(e)}>Add Widget</button>
    </>
}