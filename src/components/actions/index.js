import {
    CAR_SELECTED,
    FILTER_SELECTED,
    COLORS_SELECTED,
    TARIF_SELECTED,
    ALL_CARS,
    ALL_TARIFS
} from './types';
import axios from "axios";

export const selectCar = (car) => {
    return {
        type: CAR_SELECTED,
        payload: car
    }
}

export const filterSelect = (filter) => {
    return {
        type: FILTER_SELECTED,
        payload: filter
    }
}

export const colorsSelect = (color) => {
    return {
        type: COLORS_SELECTED,
        payload: color
    }
}

export const tarifSelect = (tarif) => {
    return {
        type: TARIF_SELECTED,
        payload: tarif
    }
}

export const getAllCars = () => {
    return (dispatch) => {
        axios.get(`http://api-factory.simbirsoft1.com/api/db/car`, {
            headers: {'X-Api-Factory-Application-Id': "5e25c641099b810b946c5d5b"}
        })
            .then(res => {
                dispatch({
                    type: ALL_CARS,
                    payload: res.data.data
                })
            })
    }
}

export const getAllTarif = () => {
    return (dispatch) => {
        axios.get(`http://api-factory.simbirsoft1.com/api/db/rate`, {
            headers: {'X-Api-Factory-Application-Id': "5e25c641099b810b946c5d5b"}
        })
            .then(res => {
                dispatch({
                    type: ALL_TARIFS,
                    payload: res.data.data
                })
            })
    }
}