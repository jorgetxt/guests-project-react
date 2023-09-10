import { configureStore } from "@reduxjs/toolkit";
import authReduce from "./module/auth/redux-toolkit/authSlice";
import guestsReduce from "./module/guests/redux-toolkit/guestsSlice";
import departmentsReduce from "./module/departments/redux-toolkit/departmentsSlice";
import { ApiBase } from "./module/shared/hooks/baseApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { departmentsApi } from "./module/departments/redux-toolkit/departmentsApiSlice";
import { authApi } from "./module/auth/redux-toolkit/authApisSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReduce,
    guests: guestsReduce,
    [departmentsApi.reducerPath]: departmentsApi.reducer,
    departments: departmentsReduce,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiBase.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
