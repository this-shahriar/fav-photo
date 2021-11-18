export const ImageReducer = (state, action) => {
  switch (action.type) {
    case "ACCEPT":
      return { ...state, accepted: [action.payload, ...state.accepted] };
    case "REJECT":
      return { ...state, rejected: [...state.rejected, action.payload] };
    case "REMOVE":
      return {
        ...state,
        accepted: [...state.accepted.filter((acc) => acc.id != action.payload)],
      };
    case "REMOVE_ALL_ACCEPTED":
      return {
        ...state,
        accepted: [],
      };
    case "GETNEW":
      return { ...state, current: action.payload };
    default:
      return state;
  }
};
