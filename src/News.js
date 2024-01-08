export default function News(props){

    return(
       
            <div className="news">
                <div className="news-img">
                    <img src={props.article.urlToImage}/>
                </div>
                    <h6>{props.article.title}</h6>
                    <p className="description">{props.article.description}</p>


            </div>
    )
}