import React from 'react';

interface Props {
    children: React.ReactElement
}

export const Domain = ({children}: Props) => {
    return <div>
        {children}
        </div>
}