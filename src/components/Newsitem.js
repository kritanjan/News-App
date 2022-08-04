import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description, imageUrl, date, author} = this.props
        return (
            <div className="card mx-3 my-3">
                <img src={imageUrl ? imageUrl : "https://elitegymequipment.com/wp-content/uploads/2020/04/Life-Fitness-Bicep-Curl-990x480.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <footer className="blockquote-footer"><cite title="Source Title">by {author?author:"Unknown"} <br/>{new Date(date).toUTCString()}</cite></footer>
                        </blockquote>
                    </div>
                    <a href={this.props.details} target='_blank' rel="noreferrer" className="btn btn-primary">Details</a>
                </div>
            </div>
        )
    }
}

export default Newsitem