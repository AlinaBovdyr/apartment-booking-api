import axios from 'axios';
import aptActions from './actions';

const fetchApartments = () => dispatch => {
    dispatch(aptActions.fetchApartmentsRequest());

    axios
        .get('/apartments')
        .then(({ data }) => dispatch(aptActions.fetchApartmentsSuccess(data)))
        .catch(error => dispatch(aptActions.fetchApartmentsError(error.message)));
};

const getApartment = aptId => dispatch => {
    dispatch(aptActions.getApartmentRequest());

    axios
        .get(`/apartments/${aptId}`)
        .then(() => dispatch(aptActions.getApartmentSuccess(aptId)))
        .catch(error => dispatch(aptActions.getApartmentError(error.message)));
};

const addReviews = (author, content, rating, aptId) => dispatch => {
    const review = {
        author,
        content,
        rating
    };

    dispatch(aptActions.addReviewsRequest());

    axios
        .post(`/apartments​/${aptId}​/reviews`, review)
        .then(({ data }) => dispatch(aptActions.addReviewsSuccess(data)))
        .catch(error => dispatch(aptActions.addReviewsError(error.message)));
};

const aptOperations = {
    fetchApartments,
    getApartment,
    addReviews
};

export default aptOperations;