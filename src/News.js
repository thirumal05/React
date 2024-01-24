export default function News(props) {
  //console.log(props.article);
  return (
    <div className='news'>
      <div className='news-img'>
        {props.article.urlToImage !== null ? (
          <img src={props.article.urlToImage} />
        ) : (
          <img src='https://shenandoahcountyva.us/bos/wp-content/uploads/sites/4/2018/01/picture-not-available-clipart-12.jpg' />
        )}
      </div>
      <h1 className='title'>{props.article.title}</h1>
      <p>
        {props.article.description?.substring(0, 100).concat('...')}
        <a href={props.article.url} target='_blank'>
          Read more
        </a>
      </p>
      <div className='source'>
        <p>{props.article.author}</p>
        <p>{props.article.source.name}</p>
      </div>
    </div>
  );
}
