import { combineReducers } from 'redux';
import CarReducer from './car';
import CarSelected from './car-select';
import SliderReducer from './slider';
import FilterCarReducer from './filter-car-list';
import FilterSelected from './filter-select';
import ColorsReducer from './colors';
import ColorsSelected from './color-select';
import TarifsReducer from './tarif';
import TarifSelected from './tarif-select';
import GetAllCars from './car.reducer';

const allReducers = combineReducers ({
    cars: CarReducer,
    select: CarSelected,
    slider: SliderReducer,
    filtercar: FilterCarReducer,
    filterselect: FilterSelected,
    colors: ColorsReducer,
    colorsselect: ColorsSelected,
    tarifs: TarifsReducer,
    tarifselect: TarifSelected,
    allcars: GetAllCars
}) 

export default allReducers;