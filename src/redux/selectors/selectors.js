export const selectFetchContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.auth.user?.name;
