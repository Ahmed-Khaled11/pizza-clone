import { createSlice, } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const clientSide = typeof window !== "undefined";
const initialState = {
  product: clientSide
    ? localStorage.getItem("cartProduct")
      ? JSON.parse(localStorage.getItem("cartProduct"))
      : []
    : [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    sendData: (state, action) => {
      // check before send product to cart cause i dont send it twice 
      const productIndex = state.product.findIndex((prod) => prod.id === action.payload.id);
      if (productIndex >= 0) {
        toast.info(`Pizza ${action.payload.title} Already In Cart`, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        const tempProduct = action.payload;
        state.product.push(tempProduct);
        toast.success("Added To Cart successfully", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      // add Product of cart to localStorage 
      localStorage.setItem("cartProduct", JSON.stringify(state.product));
    },
    // update data i deleted from cart  
    updateData(state, action) {
      state.product = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { sendData, updateData } = productSlice.actions;

export default productSlice.reducer;
