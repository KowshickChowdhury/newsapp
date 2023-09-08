import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let {title,description} = this.props;

    return (
      <div>
            <div className="card" style={{width: "18rem"}}>
            <img src="https://cdn.vox-cdn.com/thumbor/fIDI3vu2St6anUocTgKndOUnqq8=/416x192:2507x1583/1200x628/filters:focal(1440x900:1441x901)/cdn.vox-cdn.com/uploads/chorus_asset/file/24903809/google_pixel_8.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
      </div>
    )
  }
}

export default Newsitem