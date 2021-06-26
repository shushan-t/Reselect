import { createSelector } from 'reselect';


const data = state => state.server;


export const selected = createSelector([data], selectedItems => {
    console.log(Object.values(selectedItems),"shush")

    return Object.values(selectedItems).filter(item => item.completed === true)
});