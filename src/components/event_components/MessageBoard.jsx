import React from 'react';
import userpic from '../../icons/user.png'
import {useState} from 'react'
const MessageBoard = () =>{
    const [messages, setMessages] = useState([''])

    const addMessage = (e)=>{
        setMessages(e.target.value);
    }
    return(
        <>
        <h3 className="messageboard__heading">MESSAGE BOARD</h3>
        <div className="board">
            <div className="board__message">
                <img src={userpic} alt="user pic" className="board__message--pic" />
                <div className="board__message--right">
                      <h4 className="board__message--name">Tyson</h4>
                <p className="board__message--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, expedita accusamus dolorem doloremque atque illum, assumenda delectus similique facere sint a aspernatur quae, officia quos cupiditate animi ipsum! Numquam, tempore?</p>
                </div>
            </div>
            <div className="board__message">
                <img src={userpic} alt="user pic" className="board__message--pic" />
                <div className="board__message--right">
                      <h4 className="board__message--name">Tyson</h4>
                <p className="board__message--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, expedita accusamus dolorem doloremque atque illum, assumenda delectus similique facere sint a aspernatur quae, officia quos cupiditate animi ipsum! Numquam, tempore?</p>
                </div>
            </div>
            <div className="board__message">
                <img src={userpic} alt="user pic" className="board__message--pic" />
                <div className="board__message--right">
                      <h4 className="board__message--name">Tyson</h4>
                <p className="board__message--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, expedita accusamus dolorem doloremque atque illum, assumenda delectus similique facere sint a aspernatur quae, officia quos cupiditate animi ipsum! Numquam, tempore?</p>
                </div>
            </div>
            <div className="board__message">
                <img src={userpic} alt="user pic" className="board__message--pic" />
                <div className="board__message--right">
                      <h4 className="board__message--name">Tyson</h4>
                <p className="board__message--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, expedita accusamus dolorem doloremque atque illum, assumenda delectus similique facere sint a aspernatur quae, officia quos cupiditate animi ipsum! Numquam, tempore?</p>
                </div>
            </div>
            <div className="board__message">
                <img src={userpic} alt="user pic" className="board__message--pic" />
                <div className="board__message--right">
                      <h4 className="board__message--name">Tyson</h4>
                <p className="board__message--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, expedita accusamus dolorem doloremque atque illum, assumenda delectus similique facere sint a aspernatur quae, officia quos cupiditate animi ipsum! Numquam, tempore?</p>
                </div>
            </div>
          
        </div>
        <div className="inputbox">
            <input onClick={addMessage} type="text" className="inputbox__input" placeholder="type your message"/>
        </div>
    </>
)

}

export default MessageBoard;