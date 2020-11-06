export default (state = [], action) => {
  let quoteIndex

  switch (action.type) {
    case 'ADD_QUOTE':
      return [
        ...state,
        action.quote,
      ]

    case 'REMOVE_QUOTE':
      quoteIndex = state.findIndex(quote => quote.id === action.quoteId)
      return [
        ...state.slice(0, quoteIndex),
        ...state.slice(quoteIndex + 1),
      ]

    case 'UPVOTE_QUOTE':
      quoteIndex = state.findIndex(quote => quote.id === action.quoteId)
      return [
        ...state.slice(0, quoteIndex),
        {
          ...state[quoteIndex],
          votes: state[quoteIndex].votes + 1
        },
        ...state.slice(quoteIndex + 1),
      ]

      case 'DOWNVOTE_QUOTE':
        quoteIndex = state.findIndex(quote => quote.id === action.quoteId)
        return [
          ...state.slice(0, quoteIndex),
          {
            ...state[quoteIndex],
            votes: state[quoteIndex].votes > 0 ? state[quoteIndex].votes - 1 : 0
          },
          ...state.slice(quoteIndex + 1),
        ]

    default:
      return state
  }
}
