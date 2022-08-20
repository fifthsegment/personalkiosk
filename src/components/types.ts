import { SyntheticEvent } from "react"

export type DashboardMode = 'EDITING' | 'VIEWING';


export type WidgetType = 
| 'iframe'
| 'custom'

export type WidgetDefinition = {
    id: string,
    url: string,
    type: WidgetType
}

export type GenericWidgetProps = {
    id: string,
    data: undefined | WidgetDefinition,
    mode: DashboardMode
}

export type NavItem = {
    element: JSX.Element | JSX.Element[]
}

export type LayoutDefinition = {
    i: string,
    x: number,
    y: number,
    w: number,
    h: number
}

export type DomainDefinition = {
    widgets: WidgetDefinition[],
    mode: DashboardMode,
    layout: LayoutDefinition[]
}