import React, { Component } from 'react';
import './customers.css';
import NewsCard from '../newsComp';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    fetch('/getnews')
      .then(resp => resp.json())
      .then(news => this.setState({news}, () => console.log('news fetched...', news)));
  }

  render() {
    return (
      <div>
          <h1 className="news-heading">Top News</h1>
          {this.state.news.map((n)=>{
            if (n.image !== undefined){
              return <NewsCard name = {n.name} desc = {n.description} url = {n.url} date={n.datePublished} img={n.image.thumbnail.contentUrl}/>
            }
          })}
        
      </div>
    );
  }
}

export default Customers;
