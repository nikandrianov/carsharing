export default function (state = null, action) {
    switch (action.type) {
        case "FILTER_SELECTED":
            return action.payload;
        default:
            return state;
    }
}