import React from 'react';
import { WidgetDefinition, WidgetType } from '../../types';

interface Props {
    children: React.ReactElement
}

export interface DomainConsumerType {
    updateDomain: (data: DomainDefinition) => void,
    domain: DomainDefinition
}
export const DomainContext = React.createContext<DomainConsumerType>({
    updateDomain: () => {},
    domain: {widgets:[], layout: [],     mode: 'VIEWING'    }
});


export type LayoutDefinition = {
    i: string,
    x: number,
    y: number,
    w: number,
    h: number
}

export type dashboardMode = 'EDITING' | 'VIEWING';

export interface DomainDefinition {
    widgets: WidgetDefinition[], 
    layout: LayoutDefinition[],
    mode: dashboardMode
}



export const Domain = ({children}: Props) => {
    const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 2 },
      ];
    const widgets = [{
        id: 'a',
        url: 'https://google.com',
        type: 'iframe' as WidgetType
    }]
    const definition : DomainDefinition = {
        widgets:widgets, 
        layout: layout, 
        mode: 'VIEWING'
    };
    const [domainData, setDomainData] = React.useState(definition);
    const updateDomain = (data:DomainDefinition) => {
        setDomainData(data);
    }
    const initialValue = {
        updateDomain: updateDomain,
        domain: domainData,
    };
    return <DomainContext.Provider value={initialValue}>    
        {children}
    </DomainContext.Provider>
}