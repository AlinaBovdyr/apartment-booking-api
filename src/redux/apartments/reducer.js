import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import aptActions from './actions';

const apartments = createReducer([], {
    [aptActions.fetchApartmentsSuccess]: (_, {payload}) => payload,
    [aptActions.addReviewsSuccess]: (state, { payload }) => [...state, payload],
    [aptActions.getApartmentSuccess]: (state, { payload }) => state.find(payload),
});

// const filter = createReducer('', {
//     [changeFilter]: (_, { payload }) => payload,
// });

const loading = createReducer(false, {
    [aptActions.fetchApartmentsRequest]: () => true,
    [aptActions.fetchApartmentsSuccess]: () => false,
    [aptActions.fetchApartmentsError]: () => false,
    [aptActions.addReviewsRequest]: () => true,
    [aptActions.addReviewsSuccess]: () => false,
    [aptActions.addReviewsError]: () => false,
    [aptActions.getApartmentRequest]: () => true,
    [aptActions.getApartmentSuccess]: () => false,
    [aptActions.getApartmentError]: () => false,
});

const error = createReducer(null, {
    [aptActions.fetchApartmentsError]: (_, { payload }) => payload,
    [aptActions.addReviewsError]: (_, { payload }) => payload,
    [aptActions.getApartmentError]: (_, { payload }) => payload,
});

export default combineReducers({
    apartments,
    loading,
    error,
});