export default (state = [], action) => {
  switch ((action.type)) {
    case 'ADD_QUOTE':
      
      return [...state,action.quote]

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
    
    case 'UPVOTE_QUOTE':
      return state.map(quote=>{
        if (quote.id===action.quoteId) {
          return {
            content: quote.content,
            author: quote.author,
            votes: quote.votes+1,
            id: quote.id
          }
        } else {
          return quote
        }
      })
    case 'DOWNVOTE_QUOTE':
        return state.map(quote=>{
          if (quote.id===action.quoteId && quote.votes > 0) {
            return {
              content: quote.content,
              author: quote.author,
              votes: quote.votes-1,
              id: quote.id
            }
          } else {
            return quote
          }
       })
    default:
      return state;    
  }
  
}
