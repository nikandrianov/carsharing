export default function (state = null, action) {
    switch (action.type) {
        case "COLORS_SELECTED":
            return action.payload;
        default:
            return state;
    }
}
