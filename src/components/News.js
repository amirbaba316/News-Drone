import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  constructor(){
    super();
    this.state = {
        articles : [],
        loading : false,
    }
  }
  async componentDidMount(){
      let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=dfa0ad5bf1e7403f910e34dd0b048c5e";
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles:parsedData.articles})
  }
  render() {
    return (
      <div className="container my-3">  
       <h2 className="text-center my-4">Top Headlines</h2>
       <div className="row"> 
            {this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                        <NewsItem 
                          title={element.title?element.title.slice(0,45):""} 
                          description={element.description?element.description.slice(0,88):""} 
                          imageUrl={element.urlToImage} newsUrl={element.url}/>
                      </div>
              }
          )}
        </div> 
      </div>
    )
  }
}
