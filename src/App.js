import React from "react";
import './App.css';
//VOTE APP, metodologia BEM
//Aplikacja do głosowania na najlepsze zajęcia z FrontEndu
class App extends React.Component {
  state = {
    items:[
      {name: "HTML5", votes: 0}, 
      {name: "CSS i Sass", votes: 0}, 
      {name: "JS", votes: 0}, 
      {name: "REACT", votes: 0},
      {name: "Bootstrap", votes: 0},
      {name: "Git", votes: 0},
      {name: "Grafika", votes: 0},
      {name: "jQuery", votes: 0},
      {name: "PHP", votes: 0},
      {name: "Wordpress", votes: 0}
    ]
  }
  // handleClick = (index) => {
  //   let newItems = [...this.state.items]//kopia naszej tablicy ze state
  //   newItems[index].votes++;
  //   this.setState({items: newItems})
  // }
  render(){
    return (
      <div className="votes-board">
        <h1 className="votes-board__title">Twoje ulubione zajęcia to: </h1>
        {/* WYKONUJE NA TABLICY items ZE STATU METODE MAP ZA POMOCĄ KTÓREJ WYRENDERUJEMY SOBIE NAZWE item.name*/}
        {this.state.items.map((item, index)=>
          // tutaj musi być przypisany klucz key={index} bo react oczekuje tego klucza
          <div key={index} className="votes-board__item item">
            <div className="item__name">{item.name}</div>
            <div className="item__count">{item.votes}</div>
            <div className="item__button-box">
              {/* <button className="item__button" onClick={this.handleClick(index)}>Zagłosuj</button> */}
            </div>
          </div>
        )}
      </div>
    )
  }

}

export default App;
