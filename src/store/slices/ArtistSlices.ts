import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArtistData, InitialArtist } from "../../interfaces/ArtistInterface";

const initialState: InitialArtist = {
  artistDate: null,
  loading: true,
  error: "",
};

// -------------------------------------------------------------------------------
export const artistSlices = createSlice({
  name: "artist",
  initialState,
  reducers: {
    artistStart(state) {
      state.loading = true;
      state.error = "";
      state.artistDate = null;
    },
    artistSuccess(state, action: PayloadAction<ArtistData[]>) {
      state.artistDate = action.payload;
      state.loading = false;
    },
    artistFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { artistStart, artistSuccess, artistFailure } =
  artistSlices.actions;
// -------------------------------------------------------------------------------