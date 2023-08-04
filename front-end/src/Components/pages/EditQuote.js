import React, { useEffect, useState} from 'react'
import styles from './NewQuote.module.css'
import axios from 'axios'
import {useParams, useNavigate } from 'react-router-dom';
const EditQuotes = () => {
    let {id} = useParams();
    let Navigate = useNavigate();

    let [quote,setQuote] = useState({
        author:'',
        text:''
    })

    const {author, text} = quote;

    useEffect(()=>{
        fillData();
    },[])


    const fillData =async() =>{
        try{
            let res = await axios.get(`http://localhost:8080/editquotes/${id}`)
            setQuote(res.data);
          }

          catch{
            console.log("can't go on quote");
          }
    }

    const inputChangeHandler=(e)=>{
        setQuote({...quote, [e.target.name]: e.target.value})    
    }

    const editQuoteHandler = async(e) =>{
        e.preventDefault();
        await axios.post('http://localhost:8080/addquotes',{quote})
        Navigate('/');
        }


  return (
    <form onSubmit={editQuoteHandler}  className={styles.form} action="">
        <div className={styles.author}>
          <label className={styles.label} htmlFor='author' >Author:</label><br />
          <input onChange={(e)=>inputChangeHandler(e)} className={styles.input} type="text" name='author' value={author} id='author' placeholder="Author's Name"/>
       </div>

        <div className={styles.quote}>
        <label className={styles.label} htmlFor="text">Quote:</label><br />
        <textarea onChange={(e)=>inputChangeHandler(e)} className={styles.textarea} name="text" value={text} id='text' cols="22" rows="9" placeholder='Write the Quote Here...'></textarea>
        </div>
        <button>Edit Your Quote</button>
    </form>
  )
}

export default EditQuotes