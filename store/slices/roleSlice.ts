import { createSlice } from "@reduxjs/toolkit";
import { roleDB } from "../../data";

export const roleData = roleDB;

interface RoleState {
  roles: string[];
}

const initialState: RoleState = {
  roles: roleData,
};

const roleSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {}
});

export default roleSlice.reducer;
