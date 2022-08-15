import React from 'react';

interface Props {
    children: React.ReactElement
}
export const Domain = ({children}: Props) => {
    const ctx = React.createContext(false);
    return <div>    
        {children}
        </div>
}