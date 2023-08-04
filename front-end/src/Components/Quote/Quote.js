import React from 'react'
import styles from './Quote.module.css'
import { useNavigate } from 'react-router-dom'
const Quote = ({deleteQuoteHandler, text, author, id}) => {
  let Navigate = useNavigate();
  
  let showFullQuoteHandler = (id) =>{
    Navigate(`/quotes/${id}`);
  }

  let editQuoteHandler = (id) =>{
    Navigate(`/edit/${id}`)
  }

  return (
    <div>
        <li className={styles.quote}>
            <span className={styles.span}>
                <div className={styles.fquote}><p>{text}</p></div>
                <h3>{author}</h3>
            </span>
            
            <button onClick={ () => showFullQuoteHandler(id)} className={styles.btn}>view full quote </button>
            <button onClick={ () => deleteQuoteHandler(id)} className={styles.btn}>Delete quote </button>
            <button onClick={ () => editQuoteHandler(id)} className={styles.btn}>Edit quote </button>
            
        </li>
    </div>
  )
}

export default Quote