import { configureStore } from "@reduxjs/toolkit";
import authReduce from "./module/auth/redux-toolkit/authSlice";

export const store = configureStore({
  reducer: { auth: authReduce },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
