import React from 'react';
import { AddWidget } from '../add-widget/addWidget';
import { EditDashboard } from '../edit-dashboard/edit-dashboard';

export const Controls = () => {
    return <div className='controls-wrapper'>
        
        <div className="alert alert-info" role="alert">
            An <a target="_blank" href="https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe/related">extension</a> must be used to display widget contents
        </div>
        <div className='controls'>
            <AddWidget/>
            <div className='spacer'/>
            <EditDashboard/>
        </div>
    </div>
}