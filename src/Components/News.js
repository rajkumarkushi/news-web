import React, {useState,useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";




 
const News=(props)=> {

  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0);


  

  
const updatenews=async ()=>{
  props.setProgress(10);
  const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
  //this.setState({loading:true});
  setLoading(true);
  let data= await fetch(url);
  props.setProgress(30);
  let parsedData=await data.json();
  props.setProgress(70);
  setArticles(parsedData.articles);
  setTotalResults(parsedData.totalResults);
  setLoading(false);
  props.setProgress(100)
};

useEffect(()=>{

  document.title=`${props.category}-NewsMonkey`

  updatenews();
},[])

//  async componentDidMount(){
//     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=45558e6d38264375b7ce30d425861fe5&page=1&pageSize=${props.pageSize}`;
//     this.setState({loading:true});

//     let data= await fetch(url);
//     let parsedData=await data.json();
//     this.setState({
//       articles:parsedData.articles,
//       totalResults:parsedData.totalResults,
//       loading:false
//     })
//   };

 const handleprevclick=async()=>{
  setPage(page-1);
    updatenews();
  };

 const handlenextclick=async()=>{
    setPage(page+1);
    updatenews();
  };
  
 const fetchMoreData = async() => {
  const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=45558e6d38264375b7ce30d425861fe5&page=${page+1}&pageSize=${props.pageSize}`;
  setPage(page+1);
  let data= await fetch(url);
  let parsedData=await data.json();
  setArticles(articles.concat(parsedData.articles));
  setTotalResults(parsedData.totalResults)
  
 // this.updatenews()
  };

  
  

    return (
      <div className="container">
        <h1 className="text-center" style={{margin:"35px 0px", marginTop:"90px"}}>NewsMonkey-Top {props.category} Headlines </h1>
      {/* // {this.state.loading? <Spinner/>:""}  */}
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
          { articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title? element.title.slice(0,45):""} description={element.description?element.description.slice(0,54):""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
         </div>
          })}
       </div>
       </div>
       </InfiniteScroll>

       {/* <div className="container d-flex justify-content-between ">
       <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevclick}>&larr; Previous</button>
       <button disabled={(this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize))} type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr; </button>
       </div> */}

   </div>
    )
  
}

News.defaultProps={
  country:"in",
  pageSize:5,
  category:"general"
};

News.propTypes = {
  country: "propTypes.string",
  pageSize: "propTypes.number",
  category: "propTypes.string"
}

export default News
