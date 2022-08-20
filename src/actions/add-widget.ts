import { DomainDefinition } from "../components/types";

export const addWidget = (domain:DomainDefinition, updateDomain: any) => {
    const newId = Math.floor(Math.random()*1000).toString();
    updateDomain({
        ...domain,
        widgets: [...domain.widgets, {id: newId, url: 'https://www.google.com', type:'iframe' }],
        layout: [...domain.layout, 
            { i: newId, x: 0, y: 0, w: 4, h: 4 } 
        ]
    })
};