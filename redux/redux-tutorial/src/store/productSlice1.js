import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchProducts(state, action) {
    //   state.data = action.payload;
    // },
  },
  extraReducers:(builder) => {
    builder
    .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
    })
  }
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;


export const getProducts = createAsyncThunk('products/get', async()=> {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json();  
    return result;
})



// export function getProducts() {
//     return async function getProductsThunk(dispatch) {
//         const data = await fetch("https://fakestoreapi.com/products");
//         const result = await data.json();  // Use 'await' to get the result
//         dispatch(fetchProducts(result));
//     };
// }


