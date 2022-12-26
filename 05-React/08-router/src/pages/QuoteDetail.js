import React, { Fragment } from "react";
import { useParams, Route ,Link  } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighLightedQuote from '../components/quotes/HighlightedQuote'
const DUMMY_QUOTES = [
  { id : 'q1' , author: "Sharpener" , text:"Learing from Sharpener"},
  { id : 'q2' , author: "Rahul" , text:"Learing from Rahul"}

]
const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote=> quote.id === params.quoteId)

  if(!quote){
    return <p>No Quote Found</p>
  }
  return (
    <Fragment>
      <HighLightedQuote text={quote.text} author ={quote.author}/>
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
           <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`} >Load Comments</Link>
        </div>
      </Route>
     
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
