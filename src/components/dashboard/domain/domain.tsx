import React from 'react';

interface Props {
    children: React.ReactElement
}
export const Domain = ({children}: Props) => {
    const ctx = React.createContext({});
    return <div>    
        {children}
        </div>
}