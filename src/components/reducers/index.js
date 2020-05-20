import { combineReducers } from 'redux';
import SliderReducer from './slider';
import FilterCarReducer from './filter-car-list';
import ColorsReducer from './colors';
import orderReducer from './order.reducer';

const allReducers = combineReducers ({
    slider: SliderReducer,
    filtercar: FilterCarReducer,
    colors: ColorsReducer,
    order: orderReducer,
}) 

export default allReducers;