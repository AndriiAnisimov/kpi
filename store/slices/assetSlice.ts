import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { assetDB } from "../../data";
import { AssetInterface } from "@/interfaces/AssetInterface";

export const assetData = assetDB;

interface AssetState {
  assets: AssetInterface[];
}

const initialState: AssetState = {
  assets: assetData,
};

const assetSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {
    setAssets(state, action: PayloadAction<AssetInterface[]>) {
      state.assets = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<string>) {
      const asset = state.assets.find(asset => asset.id === action.payload);
      if (asset) {
        asset.favorite = !asset.favorite;
      }
    }
  }
});

export const { setAssets, toggleFavorite } = assetSlice.actions;

export default assetSlice.reducer;
