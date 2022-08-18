import React from 'react';
import { AddWidget } from '../add-widget/addWidget';
import { EditDashboard } from '../edit-dashboard/edit-dashboard';

export const Controls = () => {
    return <div className='controls-wrapper'>
        <div className='controls'>
        <AddWidget/>
        <div className='spacer'/>
        <EditDashboard/>
        </div>
        </div>
}