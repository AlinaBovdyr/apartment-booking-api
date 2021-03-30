import { createAction } from '@reduxjs/toolkit';

const fetchApartmentsRequest = createAction('apartments/fetchApartmentsRequest');
const fetchApartmentsSuccess = createAction('apartments/fetchApartmentsSuccess');
const fetchApartmentsError = createAction('apartments/fetchApartmentsError');

const getApartmentRequest = createAction('apartments/getApartmentRequest');
const getApartmentSuccess = createAction('apartments/getApartmentSuccess');
const getApartmentError = createAction('apartments/getApartmentError');

const addReviewsRequest = createAction('apartments/addReviewsRequest');
const addReviewsSuccess = createAction('apartments/addReviewsSuccess');
const addReviewsError = createAction('apartments/addReviewsError');

// export const changeFilter = createAction('apartments/ChangeFilter');
// export const changeSorting = createAction('apartments/ChangeSorting');

const aptActions = {
    fetchApartmentsRequest,
    fetchApartmentsSuccess,
    fetchApartmentsError,
    getApartmentRequest,
    getApartmentSuccess,
    getApartmentError,
    addReviewsRequest,
    addReviewsSuccess,
    addReviewsError
};

export default aptActions;