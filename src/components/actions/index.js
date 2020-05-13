export const selectCar = (car) => {
    return {
        type: "CAR_SELECTED",
        payload: car
    }
}

export const filterSelect = (filter) => {
    return {
        type: "FILTER_SELECTED",
        payload: filter
    }
}