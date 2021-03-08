const updateListings = (searchTerm) => async (dispatch, getState) => {
  let filteredArray = getState().listingReducer;
  console.log("ARRAYBEFORE API REQUEST" + filteredArray);
  await fetch(`http://localhost:5000/?searchTerm=${searchTerm}`)
    .then(async (res) => await res.json())
    .then((result) => {
      console.log(filteredArray + "RECIEVED FROM API");
      filteredArray = result;
    });

  dispatch({
    type: "update",
    payload: filteredArray,
  });
};

export default updateListings;
