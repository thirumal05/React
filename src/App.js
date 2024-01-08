import './App.css';
import News from "./News";

import { useEffect, useState } from 'react';

//b28be424bd2f440cb6fab5f932d90d69

function App() {
let [articles, setArticles]=useState([])
let [category, setCategory]=useState("microsoft")

  useEffect(()=>{

    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-01-05&apiKey=b28be424bd2f440cb6fab5f932d90d69`)
      .then((response) => response.json())
      .then((data) => {setArticles(data.articles)
                      console.log(data.articles)
      })
      .catch((err)=>{console.log(err)})

  },[category])



  return (
    <div className="Appcomponent">
        <div className="header-comp">
            <div className="header-part">
              <img src="./logoimg.png" className="logoimg"/>
              <div className="header">The Express Talk</div>
            </div>
        <input type="text" onChange={(event)=>{setCategory(event.target.value)}} placeholder="Search the news"/>
        </div>
    <section className='news-article'>
    {
      articles.map((article, index)=>{
          return(<News article={article} key={index}/>)
      })
    }
    </section>
   
    </div>
  );
}

export default App;
