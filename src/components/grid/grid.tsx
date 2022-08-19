import React, { useContext } from 'react';
import GridLayout, { Layout } from "react-grid-layout";
import Widget from "../widget/widget";
import { DomainConsumerType, DomainContext, DomainDefinition } from '../dashboard/domain/domain';

import "/node_modules/react-grid-layout/css/styles.css"
import "/node_modules/react-resizable/css/styles.css"

export default function Grid () {
      const {domain, updateDomain} = useContext(DomainContext);
      const {width} = window.screen;
      const onLayoutChange = (layout: Layout[]) => {
          updateDomain({...domain, layout: layout})
      }
      return (
          <DomainContext.Consumer>
              {({domain}) => {
                  const {layout, mode} = domain;
                  return <GridLayout className="layout"   layout={layout}
                            cols={12}
                            rowHeight={30}
                            width={width}
                            onLayoutChange={onLayoutChange}
                        >
                        {layout.map(item => {
                            const widgetProps = domain.widgets.find((widget) => {
                                return widget.id == item.i;
                            })
                            return <div key={item.i}  className="card widget-container">
                                <Widget data={widgetProps} mode={mode} id={item.i}/>
                            </div>
                        })}
                </GridLayout>
              }}
        </DomainContext.Consumer>
      );
}