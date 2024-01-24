import './App.css';
import { useEffect, useState } from 'react';
import News from './News';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  let [articles, setArticles] = useState([]);
  let [category, setCategory] = useState('america');

  const [date, setDate] = useState(new Date());

  function handleDate(date) {
    let inputDate = date;
   
    setDate(inputDate);

  

   
  }
  
  useEffect(() => {

    fetch(
      `https://newsapi.org/v2/everything?q=${category}&from=${date.getFullYear()+"-"+date.getMonth()+1+"-"+date.getDate()}&apiKey=76a30a98d96644a28cdf80bd5c2e1032`
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        //console.log(data.articles);
      })
      .catch((err) => {
        console.log('err');
        
      });
  }, [category, date]);


  return (
    <div className='App'>
      <header className='header'>
        <h1>Express Talk</h1>
        <DatePicker selected={date} onChange={handleDate} />
        <input
          type='text'
          onChange={(e) => {
            if (e.target.value !== '') {
              setCategory(e.target.value);
            } else {
              setCategory('america');
            }
          }}
          placeholder='Search the News'
        />
      </header>
      <section className='news-articles'>
        {articles.length != 0 ? (
          articles.map((article, index) => {
            return <News article={article} />;
          })
        ) : (
          <h3>No News found in searched text</h3>
        )}
      </section>
    </div>
  );
}

export default App;
