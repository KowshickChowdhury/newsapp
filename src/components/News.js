import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {  

  constructor(){
    console.log('I am a constractor of a News component');
    super();
    this.state ={
      articles : [],
      loading : false,
      page : 1
    };
  }

  async componentDidMount(){
    console.log ("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2066ccf18ce14fb7be874975bf978074&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults})
  }
  
  handlePrevCLick= async ()=>{
    console.log("Previous")
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=2066ccf18ce14fb7be874975bf978074&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page : this.state.page - 1,
      articles: parsedData.articles
    })
  }
  handleNextCLick= async ()=>{
    console.log("Next");
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=2066ccf18ce14fb7be874975bf978074&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
        page : this.state.page + 1,
        articles: parsedData.articles
      })
    }
  }
  

  render() {
    return (
      <div className='container my-3'>
        <h1 style={{ textAlign: "center" }}>NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => { // Use this.state.articles here
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 43) : ""}
                  description={element.description ? element.description.slice(0, 64) : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className='container d-flex justify-content-between'>
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevCLick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextCLick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
  
}

export default News