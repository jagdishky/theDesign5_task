import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { POST_API } from "./api/post.api";

const rootReducer = (state: any, action: any) => {
    // if (action.type === logout().type) {
    //     state = undefined;
    // }
    return combinedReducer(state, action);
};

const combinedReducer = combineReducers({
    [POST_API.reducerPath]: POST_API.reducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: { warnAfter: 128 },
        serializableCheck: { warnAfter: 128 },
    }).concat(
        POST_API.middleware
    ),
})

export type RootState = ReturnType<typeof store.getState>

export default store