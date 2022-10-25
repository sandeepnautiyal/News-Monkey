import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import NewsItem from './NewsItem'

function News(props) {
    let { category, setProgress, apiKey,pageSize } = props;

    // let 

    // eslint-disable-next-line no-dupe-keys
    let [state, setState] = useState({ page: 1, articles: [], loading: true, totalResults: 1, page: 1, author: '', description: '' });
    const updateNews = async () => {
        setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=53311b8906714d5e8d8bb58c2f754afc&page=${state.page}&pageSize=${pageSize}`;
        setProgress(50);
        let data = await fetch(url);
        let parseData = await data.json();
        setState({ articles: parseData.articles, loading: false })
        setProgress(100);
    }
    
    
    const fetchMoreData=async()=>{
    setState({page:state.page+1});
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=53311b8906714d5e8d8bb58c2f754afc&page=${state.page}&pageSize=${pageSize}`;
        setState({loading:true})
const data=await fetch(url);
let parseData=await data.json(url);
setState({articles:state.articles.concat(parseData.articles) ,totalResults: parseData.totalResults, loading: false})
    }

    useEffect(() => {
        updateNews();
        // fetchMoreData();
    },[]
    )

    


    return (
        <div className='my-5 container'>
            <h1 className='text-center my-5'>News Monkey - Top {category} Headlines </h1>



            {state.loading &&
                <div className='text-center'>
                    <Loading />
                </div>
            }


<InfiniteScroll
  dataLength={state.articles.length} //This is important field to render the next data
  next={fetchMoreData}
  hasMore={state.articles.length<state.totalResults}
  loader={<h4><Loading/></h4>}
//   endMessage={
//     <p style={{ textAlign: 'center' }}>
//       <b>Yay! You have seen it all</b>
//     </p>
//   }
  // below props only if you need pull down functionality
//   refreshFunction={this.refresh}
//   pullDownToRefresh
//   pullDownToRefreshThreshold={50}
//   pullDownToRefreshContent={
//     <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
//   }
//   releaseToRefreshContent={
//     <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
//   }
>


            <div className='row'>

                {state.articles.map((item, key) => {
                    return (
                        <div className='col-md-4' key={item.url}>


                            <NewsItem
                                img={item.urlToImage}
                                author={item.author}
                                source={item.name}
                                title={item.title}
                                url={item.url}
                                description={item.content}
                                publishedAt={item.publishedAt}

                            />
                        </div>

                    )
                })}
            </div>
                </InfiniteScroll>
        </div>
    )
}

export default News