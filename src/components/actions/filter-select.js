export const filterSelect = (filter) => {
    alert(filter.name);
    return {
        type: "FILTER_SELECTED",
        payload: filter
    }
}

