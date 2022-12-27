
/**
 * Users selector
 */
export const usersSelector = (state) => {
    console.log(state.usersReducer);
    return {...state.usersReducer}
}