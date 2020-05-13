import { combineReducers } from 'redux';
import CarReducer from './car';
import CarSelected from './car-select';
import SliderReducer from './slider';
import FilterCarReducer from './filter-car-list';
import FilterSelected from './filter-select';

const allReducers = combineReducers ({
    cars: CarReducer,
    select: CarSelected,
    slider: SliderReducer,
    filtercar: FilterCarReducer,
    filterselect: FilterSelected,
}) 

export default allReducers;