import React, { Component } from 'react'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import Footer from './Footer';
import PropTypes from 'prop-types';


export class News extends Component {  

  static defaultProps = {
    country : 'us',
    pageSize : 5,
    category :'general'
  }
  
  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }

  constructor(){
    console.log('I am a constractor of a News component');
    super();
    this.state ={
      articles : [],
      loading : false,
      page : 1
    };
  }

  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2066ccf18ce14fb7be874975bf978074&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles, 
      totalResults:parsedData.totalResults,
      loading : false
          })
  }

  async componentDidMount(){
    console.log ("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2066ccf18ce14fb7be874975bf978074&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles, 
      totalResults:parsedData.totalResults,
      loading : false
          })
  }
  
  handlePrevCLick= async ()=>{
    console.log("Previous")
    // this.setState({loading:true});
    
    // setTimeout( async () => {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2066ccf18ce14fb7be874975bf978074&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //   let data = await fetch(url);
    //   let parsedData = await data.json()
    //   console.log(parsedData);
    //   this.setState({
    //     page : this.state.page - 1,
    //     articles: parsedData.articles,
    //     loading : false
    //   })
    // }, 500);
    this.setState({page: this.state.page - 1})
    this.updateNews();
  }
  handleNextCLick= async ()=>{
    console.log("Next");
    // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
    // {
    //   this.setState({loading: true});
    //   setTimeout( async ()=>
    //   {
    //     this.setState({loading: true});
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2066ccf18ce14fb7be874975bf978074&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     this.setState({
    //     page : this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading : false
    //     });
    //   }, 500);
    // }
    this.setState({page: this.state.page + 1})
    this.updateNews();
  }
  

  render() {
    return (
      <>
      <div className='container my-3'>
        <h1 className='text-center' style={{margin: "35px 0px"}}>NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => { // Use this.state.articles here
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 43) : ""}
                  description={element.description ? element.description.slice(0, 64) : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className='container d-flex justify-content-between'>
        <button type="button" disabled={this.state.page <=1 } className="btn btn-dark" onClick={this.handlePrevCLick}>&larr; Previous</button>
        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextCLick}>Next &rarr;</button>
        </div>
        
      </div>
      <Footer />
      </>
    );
  }
}

export default News