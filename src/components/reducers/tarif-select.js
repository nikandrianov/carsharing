export default function (state = null, action) {
    switch (action.type) {
        case "TARIF_SELECTED":
            return action.payload;
        default:
            return state;
    }
}