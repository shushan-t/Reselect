import { createSelector } from 'reselect';


const data = state => state.server;

export const selected = createSelector([data], selectedItems => {
    return Object.keys(selectedItems).filter(item => item.completed === true)
});