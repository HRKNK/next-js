import { sortEnum } from "./Sort.types";

export type SortActions = sortEnum;

export interface SortReduceState {
	sort: SortActions;
	products: any[];
}

export const sortReducer = (state: SortReduceState, action: SortActions): SortReduceState => {
	switch (action) {
		case 'price':
			return {
				sort: 'price',
				products: state.products.sort((a, b) => a.price > b.price? 1 : -1)
			}

		case 'rating':
			return {
				sort: 'rating',
				products: state.products.sort((a, b) => a.initialRating > b.initialRating? -1 : 1)
			}

		default:
			throw new Error('Can\'t sort');
			
	}
};