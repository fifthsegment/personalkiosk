import React, { SyntheticEvent } from 'react';
import { DomainConsumerType, DomainContext, DomainDefinition } from '../domain/domain';

export const AddWidget = () => {
    const onAddWidget = (e: SyntheticEvent, domain: DomainDefinition, setDomain:any) => {
        setDomain({
            ...domain,
            widgets: [...domain.widgets, {id: "e"}],
            layout: [...domain.layout, 
            { i: "d", x: 4, y: 0, w: 1, h: 2 } 
            ]
        })
    };
    return <div>
        <DomainContext.Consumer>
            {({domain, updateDomain}:DomainConsumerType) => {
                return <>
                        Widgets : {domain.widgets.length}

                    <button onClick={(e) => onAddWidget(e, domain, updateDomain)}>Add Widget</button>
                </>
            }}
        </DomainContext.Consumer>
        </div>
}