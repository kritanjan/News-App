import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Loader from './Loader';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    constructor() {
        super()
        this.state =
        {
            articles: [],
            pageNo: 1,
            totalResults: 0,
            totalPages: 0,
        };
    }

    async componentDidMount() {
        this.setState({ load: true })
        let response = await fetch(`https://newsapi.org/v2/everything?apiKey=dd217d7f6cee4e9f8c8c3e106a323991&q=${this.props.category}&pageSize=${this.props.pageSize}`);
        let data = await response.json();
        console.log(data.totalResults)
        this.setState({
            articles: data.articles,
            totalResults: data.totalResults,
            totalPages: Math.ceil(data.totalResults / this.props.pageSize),
        });
    }
    getData = async (pageNo) => {
        let response = await fetch(`https://newsapi.org/v2/everything?apiKey=${this.props.apiKey}&q=${this.props.category}&pageSize=${this.props.pageSize}&page=${pageNo}`);
        let data = await response.json();
        console.log(data)
        this.setState({
            articles: this.state.articles.concat(data.articles),
        });
    }
    fetchMoreData = async () => {
        this.setState({ load: true })
        this.state.pageNo = this.state.pageNo + 1
        console.log(this.state.pageNo)
        this.getData(this.state.pageNo)
    }
    render() {
        return (
            <>
                <h2 className='text-center my-3'>These are the top news headlines:</h2>
                <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.pageNo === this.totalPages} loader={<Loader />}>
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return (
                                    <div className='col-md-4' key={element.url}>
                                        <Newsitem details={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} author={element.author} date={element.publishedAt} />
                                    </div>)
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}
export default News