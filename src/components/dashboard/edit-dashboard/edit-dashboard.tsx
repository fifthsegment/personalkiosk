import React, { SyntheticEvent, useContext } from 'react';
import { AddWidget } from '../add-widget/addWidget';
import { DomainContext } from '../domain/domain';

export const EditDashboard = () => {
    const {domain, updateDomain} = useContext(DomainContext);
    const {mode} = domain;
    
    const toggleDashboardMode = (e: SyntheticEvent) => {
        updateDomain({...domain, mode: mode === 'VIEWING' ? 'EDITING' : 'VIEWING'})
    }
    return <>
            <button className="btn-toggle-dashboard-mode" onClick={toggleDashboardMode}> {mode === 'VIEWING'? 'Edit' : 'Save'} Dashboard</button>
        </>
}