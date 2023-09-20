import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import Footer from "./Footer";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const { category } = props;
  // document.title = `${this.capitalizeFirstLetter(props.category)} - NewsMonkey`;

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(60);
    console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  }, []);

  // async componentDidMount(){
  // console.log ("cdm");
  // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2066ccf18ce14fb7be874975bf978074&page=1&pageSize=${props.pageSize}`;
  // this.setState({loading:true});
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // console.log(parsedData);
  // this.setState({
  //   articles: parsedData.articles,
  //   totalResults:parsedData.totalResults,
  //   loading : false
  //       })

  // }

  // handlePrevCLick= async ()=>{
  //   console.log("Previous")
  //   // this.setState({loading:true});

  //   // setTimeout( async () => {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2066ccf18ce14fb7be874975bf978074&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
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
  //   // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)))
  //   // {
  //   //   this.setState({loading: true});
  //   //   setTimeout( async ()=>
  //   //   {
  //   //     this.setState({loading: true});
  //   //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2066ccf18ce14fb7be874975bf978074&page=${this.state.page + 1}&pageSize=${props.pageSize}`;

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

  const fetchMoreData = async () => {
    setPage(page+1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "72px 0 10px" }}>
        NewsMonkey - Top {capitalizeFirstLetter(category)} Headlines
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              // Use articles here
              return (
                <div
                  className="col-md-4"
                  key={`${element.title}-${element.publishedAt}`}
                >
                  <Newsitem
                    title={element.title ? element.title.slice(0, 43) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 64)
                        : ""
                    }
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
        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} className="btn btn-dark" onClick={this.handleNextCLick}>Next &rarr;</button>
        </div> */}

      <Footer />
    </>
  );
};

News.defaultProps = {
  country: "us",
  // pageSize : 5,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
