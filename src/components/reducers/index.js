import { combineReducers } from 'redux';
import CarReducer from './car';
import CarSelected from './car-select';
import SliderReducer from './slider';
import FilterCarReducer from './filter-car-list';

const allReducers = combineReducers ({
    cars: CarReducer,
    select: CarSelected,
    slider: SliderReducer,
    filtercar: FilterCarReducer,
}) 

export default allReducers;