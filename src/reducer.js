export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  error: null,
  //remove after developing
  //   token:
  //     'BQCK1s7k_TXL_DKsJstmIghjdhVJ14iNh6qGfiQgoQ5bjjZcnW6j2zlUhrFE1VQFCLhRNQMUsZe_wjJWhmDnhxtpBO0hvW60q7YjyRpmcdb1wSR11c25LTP90rM5hcxAXj_1L0zhQaG3OtkBR6VMn9s-KqkWyYA',
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_ERROR':
      return {
        ...state,
        error: action.error,
      };
    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing,
      };

    case 'SET_ITEM':
      return {
        ...state,
        item: action.item,
      };

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case 'SET_TOP_ARTISTS':
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case 'SET_SPOTIFY':
      return {
        ...state,
        spotify: action.spotify,
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
