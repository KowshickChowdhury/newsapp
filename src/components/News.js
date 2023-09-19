import React, { Component } from 'react'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import Footer from './Footer';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {  

  static defaultProps = {
    country : 'in',
    // pageSize : 5,
    category :'general'
  }
  
  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }

  capitalizeFirstLetter=(str)=> {
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

  constructor(props){
    console.log('I am a constractor of a News component');
    super(props);
    this.state ={
      articles : [],
      loading : true,
      page : 1,
      totalResults : 0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }

  async updateNews(){
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(60);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles, 
      totalResults:parsedData.totalResults,
      loading : false
          })
      this.props.setProgress(100);
  }

  async componentDidMount(){
    // console.log ("cdm");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2066ccf18ce14fb7be874975bf978074&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles, 
    //   totalResults:parsedData.totalResults,
    //   loading : false
    //       })
    this.updateNews();
  }
  
  // handlePrevCLick= async ()=>{
  //   console.log("Previous")
  //   // this.setState({loading:true});
    
  //   // setTimeout( async () => {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2066ccf18ce14fb7be874975bf978074&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //   //   let data = await fetch(url);
  //   //   let parsedData = await data.json()
  //   //   console.log(parsedData);
  //   //   this.setState({
  //   //     page : this.state.page - 1,
  //   //     articles: parsedData.articles,
  //   //     loading : false
  //   //   })
  //   // }, 500);
  //   this.setState({ page: this.state.page - 1 })
  //   this.updateNews();
  // }

  // handleNextCLick= async ()=>{
  //   console.log("Next");
  //   // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
  //   // {
  //   //   this.setState({loading: true});
  //   //   setTimeout( async ()=>
  //   //   {
  //   //     this.setState({loading: true});
  //   //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2066ccf18ce14fb7be874975bf978074&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        
  //   //     let data = await fetch(url);
  //   //     let parsedData = await data.json()
  //   //     this.setState({
  //   //     page : this.state.page + 1,
  //   //     articles: parsedData.articles,
  //   //     loading : false
  //   //     });
  //   //   }, 500);
  //   // }
  //   this.setState({ page: this.state.page + 1 })
  //   this.updateNews();
  // }

  fetchMoreData = async() => {

    this.setState({ page: this.state.page + 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles), 
      totalResults:parsedData.totalResults,
      // loading : false
          })

  };
  

  render() {
    return (
      <>
      
        <h1 className='text-center' style={{margin: "35px 0px"}}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults }
          loader={this.state.loading && <Spinner />}
        >
      <div className='container'>
        <div className="row">
          {this.state.articles.map((element) => { // Use this.state.articles here
            return (
              <div className="col-md-4" key={`${element.title}-${element.publishedAt}`}>
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
        </div>
        </InfiniteScroll>

        {/* <div className='container d-flex justify-content-between'>
        <button type="button" disabled={this.state.page <=1 } className="btn btn-dark" onClick={this.handlePrevCLick}>&larr; Previous</button>
        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextCLick}>Next &rarr;</button>
        </div> */}
        
      
      <Footer />
      </>
    );
  }
}

export default News