export default function (state = [], action) {
    switch (action.type) {
        case "ALL_TARIFS":
            return action.payload;
        default:
            return state;
    }
}
