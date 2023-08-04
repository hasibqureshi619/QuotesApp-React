import React, {useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styles from './ShowQuotes.module.css'
const ShowQuotes = () => {

    const params = useParams();

    let [quote, setQuote] = useState({text:'', author:''});

    async function fetchQuote(){
        let res = await axios.get(`http://localhost:8080/quotes/${params.id}`)
        let {text, author} = res.data;
        setQuote({text,author});
    }

    useEffect(()=>{ 
    fetchQuote();
    }, []);
  return (
    <div>
        <li className={styles.quote}>
            <span className={styles.span}>
                <div className={styles.fquote}><p>{quote.text}</p></div>
                <h3>{quote.author}</h3>
            </span>
        </li>
    </div>
  )
}

export default ShowQuotes