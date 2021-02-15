import updateListings from "./actions/updateListings.js";

const updateListingsWithSearch = async (searchTerm) => {
  console.log(searchTerm);
  return async (dispatch) => {
    await fetch(`http://localhost:5000/listings?searchTerm=${searchTerm}`)
      .then(async (res) => await res.json())
      .then((result) => {
        dispatch(updateListings(result));
      });
  };
};
export default updateListingsWithSearch;
