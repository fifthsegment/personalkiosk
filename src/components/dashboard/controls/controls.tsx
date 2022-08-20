import React, { useContext } from 'react';
import { addWidget } from '../../../actions';
import { NavLink } from '../../../styled-components';
import { Navbar } from '../../navbar/navbar';
import { DomainContext } from '../domain/domain';
import { EditDashboard } from './edit-dashboard/edit-dashboard';

export const Controls = () => {
    const {domain, updateDomain} = useContext(DomainContext);

    const items = [
              { 
                element : <NavLink icon="fa-plus" onClick={() => addWidget(domain, updateDomain)}/>
              }, {
                element: <EditDashboard />
              }];
    return <div className='controls-wrapper'>
        <Navbar items={items}/>
    </div>
}