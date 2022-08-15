import React from 'react';

interface Props {
    children: React.ReactElement
}

// eslint test
export const Domain = ({children}: Props) => {
    const ctx = React.createContext({});
    return <div>    
        {children}
        </div>
}