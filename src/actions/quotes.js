// TODO: Create action creators as defined in tests

//test say it needs to return a quote object as well
//Object.assign() copies the values (of all enumerable own properties) from one or more source
// objects to a target object. It has a signature of Object.assign(target, ...sources).
// The target object is the first parameter and is also used as the return value.
// Object.assign() is useful for merging objects or cloning them shallowly.




export const addQuote = quote => {
  return {
    type: 'ADD_QUOTE',
    quote: Object.assign({}, quote, { votes: 0 })
  }
}

export const removeQuote = quoteId => {
  return {
    type: 'REMOVE_QUOTE',
    quoteId
  }
}

export const upvoteQuote = quoteId => {
  return {
    type: 'UPVOTE_QUOTE',
    quoteId
  }
}

export const downvoteQuote = quoteId => {
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId
  }
}
