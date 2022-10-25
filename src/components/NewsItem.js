import React from 'react'

import noImg from '../img/noImg.png'

function NewsItem(props) {
    const { img,title,author,url,publishedAt ,description} =props;

    return (
        <>
        <div className='row container'>
          <div className='col'>
            <div className="card my-4 " >
              <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>

                <span className="badge rounded-pill bg-danger my-2" style={{ zIndex: '1', left: '90%' }}>{author?author:'Unknown Source'}</span>
              </div>

              <img src={img ? img : noImg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}
                </h5>
                <p className="card-text">{description}...</p>
                <p className='card-text'><small className='text-muted'>By {author ? author : 'unknown'} on {new Date(publishedAt).toTimeString()}</small></p>
                <a href={url} target="_blank" className="btn btn-primary">See more</a>
              </div>
            </div>
          </div>

      </div>
        </>

    )
}

export default NewsItem