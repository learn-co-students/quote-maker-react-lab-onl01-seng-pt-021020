export function addQuote(state){
  return {type: 'ADD_QUOTE', quote: state}
}
export function removeQuote(id) {
  return {type: 'REMOVE_QUOTE', quoteId: id}
}
export function upvoteQuote(id){
  return {type: 'UPVOTE_QUOTE', quoteId: id}
}
export function downvoteQuote(id){
  return {type: 'DOWNVOTE_QUOTE', quoteId: id}
}