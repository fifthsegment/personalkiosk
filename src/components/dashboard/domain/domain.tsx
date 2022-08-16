import React from 'react';

interface Props {
    children: React.ReactElement
}

export interface DomainConsumerType {
    updateDomain: (data: DomainDefinition) => void,
    domain: DomainDefinition
}
export const DomainContext = React.createContext<DomainConsumerType>({
    updateDomain: () => {},
    domain: {widgets:[], layout: []}
});

export type WidgetDefinition = {
    id: string,
}

export type LayoutDefinition = {
    i: string,
    x: number,
    y: number,
    w: number,
    h: number
}

export interface DomainDefinition {
    widgets: WidgetDefinition[], 
    layout: LayoutDefinition[]
}



export const Domain = ({children}: Props) => {
    const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 2 },
        { i: "b", x: 1, y: 2, w: 3, h: 2},
        { i: "c", x: 4, y: 0, w: 1, h: 2 }
      ];
    const definition : DomainDefinition = {widgets:[], layout: layout};
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