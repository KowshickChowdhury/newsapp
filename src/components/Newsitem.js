import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;

    return (
      <div className='my-3'>
          
            <div className="card">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
                  {source}
                </span>
            <img src={!imageUrl?"https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png":imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-primary">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-success">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read more</a>
            </div>
            </div>
      </div>
    )
  }
}

export default Newsitem