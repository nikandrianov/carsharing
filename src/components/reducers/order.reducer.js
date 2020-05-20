import {
    CAR_SELECTED,
    FILTER_SELECTED,
    COLORS_SELECTED,
    TARIF_SELECTED,
    ALL_CARS,
    ALL_TARIFS
} from '../actions/types';

const initialState = {
    car: {},
    color: {},
    tarif: {},
    filter: {},
    allcars: [],
    alltarifs: [],
};

export default function orderReducer(state = initialState, action) {
    switch (action.type) {
        case CAR_SELECTED:
            return {...state, car: action.payload};
        case COLORS_SELECTED:
            return {...state, color: action.payload};
        case FILTER_SELECTED:
            return {...state, filter: action.payload};
        case TARIF_SELECTED:
            return {...state, tarif: action.payload};
        case ALL_CARS:
            return {...state, allcars: action.payload};
        case ALL_TARIFS:
            return {...state, alltarifs: action.payload};
        default:
            return state;
    }
}