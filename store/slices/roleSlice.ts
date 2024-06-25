import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { roleDB } from "../../data";
import { RoleItemInterface } from "@/interfaces/RoleItemInterface";

export const roleData = roleDB;

interface RoleState {
  roles: RoleItemInterface[];
}

const initialState: RoleState = {
  roles: roleData,
};

const roleSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {
    setRoles(state, action: PayloadAction<RoleItemInterface[]>) {
      state.roles = action.payload;
    }
  }
});

export const { setRoles } = roleSlice.actions;

export default roleSlice.reducer;
