import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loader from './Loader'

export class News extends Component {
    constructor() {
        super()
        this.state = 
        { 
            articles: [],
            pageNo: 1,
            totalResults: 0,
            totalPages: 0,
            load: true,
        };
    }
    
    async componentDidMount() {
        this.setState({load:true})
        let response = await fetch(`https://newsapi.org/v2/everything?apiKey=dd217d7f6cee4e9f8c8c3e106a323991&q=${this.props.category}&pageSize=${this.props.pageSize}`);
        let data = await response.json();
        console.log(data.totalResults)
        this.setState({
            articles: data.articles,
            totalResults: data.totalResults,
            totalPages: Math.ceil(data.totalResults/9),
            load: false
        });
    }
    getData = async (pageNo) => {
        let response = await fetch(`https://newsapi.org/v2/everything?apiKey=${this.props.apiKey}&q=${this.props.category}&pageSize=${this.props.pageSize}&page=${pageNo}`);
        let data = await response.json();
        console.log(data)
        this.setState({
            articles: data.articles,
            load: false
        });
    }
    previousButtonHandler = async ()=>{
        this.setState({load:true})
        this.state.pageNo = this.state.pageNo - 1
        console.log(this.state.pageNo)
        this.getData(this.state.pageNo)
    }
    nextButtonHandler = async ()=>{
        this.setState({load:true})
        this.state.pageNo = this.state.pageNo + 1
        console.log(this.state.pageNo)
        this.getData(this.state.pageNo)
    }
    render() {
        return (
            <div className="container">
                <h2>These are the top news headlines:</h2>
                {this.state.load && <Loader/>}
                <div className="row">
                {this.state.articles.map((element) => {
                        return ( 
                            <div className='col-md-4' key={element.url}>
                            <Newsitem details={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} author={element.author} date={element.publishedAt} />
                            </div>)
                    })}
                </div>
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.pageNo<=1} type="button" className="btn btn-primary" onClick={this.previousButtonHandler}>Previous</button>
                        <button disabled={this.state.pageNo>=this.state.totalPages} type="button" className="btn btn-success" onClick={this.nextButtonHandler}>Next</button>
                    </div>
            </div>
        )
    }
}
export default News