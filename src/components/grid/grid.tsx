import React from 'react';
import GridLayout from "react-grid-layout";
import Widget from "../widget/widget";
import { DomainConsumerType, DomainContext, DomainDefinition } from '../dashboard/domain/domain';

import "/node_modules/react-grid-layout/css/styles.css"
import "/node_modules/react-resizable/css/styles.css"

export default function Grid () {

      const {width} = window.screen;

      return (
          <DomainContext.Consumer>
              {({domain}) => {
                  const {layout} = domain;
                  return <GridLayout className="layout"   layout={layout}
                            cols={12}
                            rowHeight={30}
                            width={width}
                        >
                        {layout.map(item => {
                            return <div key={item.i} className="widget-container">
                                <Widget />
                            </div>
                        })}
                </GridLayout>
              }}
        </DomainContext.Consumer>
      );
}