import { useContext } from "react";
import GridLayout, {
  Responsive,
  Layout,
  WidthProvider,
} from "react-grid-layout";
import Widget from "../widget/widget";
import { DomainContext } from "../dashboard/domain/domain";

import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

export default function Grid() {
  const { domain, updateDomain } = useContext(DomainContext);
  const { width } = window.screen;
  const ResponsiveGridLayout = WidthProvider(Responsive);
  const onLayoutChange = (layout: Layout[]) => {
    updateDomain({ ...domain, layout: layout });
  };
  const allowMovements = domain.mode === "VIEWING";
  return (
    <DomainContext.Consumer>
      {({ domain }) => {
        const { layout, mode } = domain;
        return (
          <div className="widget-grid-container">
            <ResponsiveGridLayout
              className="layout"
              layouts={{
                lg: layout,
                sm: layout,
                md: layout,
                xs: layout,
                xxs: layout,
              }}
              //cols={12}
              rowHeight={10}
              //width={width - 100}
              onLayoutChange={onLayoutChange}
              isDraggable={allowMovements}
              isResizable={allowMovements}
              breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
              cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            >
              {layout.map((item) => {
                const widgetProps = domain.widgets.find((widget) => {
                  return widget.id === item.i;
                });
                return (
                  <div key={item.i} className="card widget-container">
                    <Widget data={widgetProps} mode={mode} id={item.i} />
                  </div>
                );
              })}
            </ResponsiveGridLayout>
          </div>
        );
      }}
    </DomainContext.Consumer>
  );
}