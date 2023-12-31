// import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component"

const CardList = (props) => {
  return <div className="card-list">
      {props.monsters.map(monster =>{
          return (
        <Card monster={monster}/>
      )}  
      )}
  </div>;
}


// class CardList extends Component {
//   render() {
//     // console.log(this.props);
//     const  { monsters } = this.props;
//     return <div className="card-list">
//         {monsters.map(monster =>{
//             return (
//           <Card monster={monster}/>
//         )})}

//     </div>;
//   }
// }

export default CardList;
