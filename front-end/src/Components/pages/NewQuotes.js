import React, { useRef} from 'react'
import styles from './NewQuote.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const NewQuotes = () => {

  let Navigate = useNavigate();

  let authorInputRef = useRef();
  let quoteInputRef = useRef();

  const addQuoteHandler = async(e) =>{
    e.preventDefault();
    const author = authorInputRef.current.value;
    const text = quoteInputRef.current.value;
    try{
      let res = await axios.post('http://localhost:8080/addquotes',{author,text})
      console.log(res);
      Navigate('/');
    }
    catch{
      console.log("can't create new quote");
    }
  }

  return (
    <form onSubmit={addQuoteHandler}  className={styles.form} action="">
        <div className={styles.author}>
          <label className={styles.label} htmlFor="author">Author:</label><br />
          <input className={styles.input} ref={authorInputRef} type="text" id="author" placeholder="Author's Name"/>
       </div>

        <div className={styles.quote}>
        <label className={styles.label} htmlFor="quote">Quote:</label><br />
        <textarea className={styles.textarea} ref={quoteInputRef} name="" id="quote" cols="22" rows="9" placeholder='Write the Quote Here...'></textarea>
        </div>
        <button>Add Your Quote</button>
    </form>
  )
}

export default NewQuotes