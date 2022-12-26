import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

 const AllQuotes = () => {
    const DUMMY_QUOTES = [
        { id : 'q1' , author: "Sharpener" , text:"Learing from Sharpener"},
        { id : 'q2' , author: "Rahul" , text:"Learing from Rahul"}

    ]
  return (
       <QuoteList quotes={DUMMY_QUOTES} />
  )
}

export default AllQuotes
