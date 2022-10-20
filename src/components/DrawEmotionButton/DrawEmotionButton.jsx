import React from 'react';
import Popup from 'reactjs-popup';
import './DrawEmotionButton.scss'

export function DrawEmotionButton(){
    return(
        <div>

            <Popup trigger={<button> Radość</button>}>
                <div>RADOŚĆ</div>
                <div>OPIS RADOŚCI</div>
                <div>OPIS RADOŚCI</div>
                <div>OPIS RADOŚCI</div>
                <div>OPIS RADOŚCI</div>

            </Popup>
        </div>
    )
};








// export class RandomNumbers extends Component {
//     state = {
//         numbers: []
//     }
//     handleClick = () => {
//         this.setState(prevState => {
//             return  {
//                 numbers: [...prevState.numbers, getRandomNumber(100, 999)],
//             }
//         });
//     }
//     render () {
//         return (
//             <div>
//                 <button onClick={this.handleClick}>Wylosuj Liczbę</button>
//                 <ul>
//                     {this.state.numbers.map((number,index) => (
//                         <li key={index}>{number}</li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }