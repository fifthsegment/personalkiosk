import React from 'react';
import { getDefaultDomain } from '../../../actions';
import { DashboardMode, DomainDefinition, LayoutDefinition, WidgetDefinition, WidgetType } from '../../types';

interface Props {
    children: React.ReactElement
}

export interface DomainConsumerType {
    updateDomain: (data: DomainDefinition) => void,
    domain: DomainDefinition
}
export const DomainContext = React.createContext<DomainConsumerType>({
    updateDomain: () => {},
    domain: getDefaultDomain()
});

export const Domain = ({children}: Props) => {

    const definition : DomainDefinition = getDefaultDomain();
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