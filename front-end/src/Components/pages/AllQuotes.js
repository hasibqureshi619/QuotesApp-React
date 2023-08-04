import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Quote from '../Quote/Quote'
// import styles from '../Quote/Quote.module.css'
const AllQuotes = () => {
  
  let [quotes, setQuotes] = useState([]);

       async function getQuotes(){
        let res = await axios.get('http://localhost:8080/allquotes');
        setQuotes(res.data);
      }

      useEffect(() => {
        getQuotes();
      }, [])
  
      const deleteQuoteHandler =async(id) =>{
        await axios.delete(`http://localhost:8080/delete/${id}`);
        getQuotes();
      }

  return (
    <div>
      <h1>All Quotes</h1>
      <ul>
        {
          quotes.map((quote,index)=>{
            return <Quote deleteQuoteHandler = {deleteQuoteHandler} key={quote._id} author= {quote.author} text = {quote.text} id={quote._id} />
          })
        }
      </ul>  
    </div>
  )
}

export default AllQuotes