import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'

class Quotes extends Component {

  render() {
    const mapQuotes = this.props.quotes.map(quote => {
      return(
        <div>
          <QuoteCard 
            quote={quote}
            key={quote.id} 
            removeQuote={this.props.removeQuote}
            upvoteQuote={this.props.upvoteQuote}
            downvoteQuote={this.props.downvoteQuote}
          />
        </div>
        )
      })
      
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              { mapQuotes }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes}
}


export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
