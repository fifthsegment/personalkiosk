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
}