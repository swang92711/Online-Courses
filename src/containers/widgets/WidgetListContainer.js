import { connect } from 'react-redux'
import WidgetListComponent from './WidgetListComponent'

const stateToPropertyMapper = state => (
    {
        widgets: state.widgets
    }
)

const dispatcherToPropertyMapper = dispatch => (
    {
        deleteWidget: (wid) => dispatch({
            type: "DELETE_WIDGET",
            widgetId: wid
        })
    }
)

const WidgetListContainer = connect(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetListComponent)

export default WidgetListContainer