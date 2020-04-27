import React, { Component } from "react";
import CardList from './CardList'
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import './App.css';

// state を 定義
// state は 変化するもの、このアプリに影響するもの。
// state は　大体いつもペアレントコンポーネントにいる。
// そして、state を 他のコンポーネントに渡す。

// State は class の中に記述される
// class の中には constructor があり this.state　が記述される。
// Vertual DOM　はただの　object 
// React は このstate を使って　render したり、 Propとして コンポーネントを渡そうとしたりする。


// this は　App　のこと
class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchfield: '',
    }
  }

  //input <SearchBox> の変化がトリガーになってeventが出力される。
  // setState Stateを変えたいときは、このReact のメソッドを使う。
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  } 

  render(){
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <CardList robots={ filteredRobots }/> 
      </div>
    );
  }
}

export default App;