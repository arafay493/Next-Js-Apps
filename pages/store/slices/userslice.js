import { userList } from "@/pages/data";
const { createSlice } = require("@reduxjs/toolkit");

const userslice = createSlice({
  name: "user",
  initialState: userList,
  reducers: {
    addUser(state, action) {
      const { name, email } = action.payload;
      const id = state[state.length - 1].id + 1;

      state.push({
        id,
        name,
        email,
      });
    },
    editUser(state, action) {
      const { id, name, email } = action.payload;
      const updatedUser = state.find((user) => user.id === id);
      if (updatedUser) {
        updatedUser.name = name;
        updatedUser.email = email;
      }
    },
    deleteUser(state, action) {
      console.log(action.payload);
      return state.filter((elem) => elem.id !== action.payload);
    },
  },
});

// console.log(userList)
export const { addUser, deleteUser, editUser } = userslice.actions;

export default userslice.reducer;
