export default function (state = [], action) {
    switch (action.type) {
        case "ALL_CARS":
            return action.payload;
        default:
            return state;
    }
}