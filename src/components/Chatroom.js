import { useEffect, useRef, useState } from "react";
import axios from 'axios';

function Chatroom (props) {
    //load chat
    const [users, setUsers] = useState([]);

    const getChat = async() => {
        await axios({
            method:"POST",
            url: 'http://ec2-54-193-78-105.us-west-1.compute.amazonaws.com:8080/chat'
        }).then((res)=>{
            setUsers(res.data);
        }).catch(error=>{
            console.log(error);
            throw new Error(error);
        });
    };
    
    useEffect(()=>{
        getChat();    
    }, []);

    //add chat
    const [userInput, setUsetInput] = useState("");
    function inputChange(e){
        setUsetInput(e.target.value);
    }

    function addChat(){
        axios.post('http://ec2-54-193-78-105.us-west-1.compute.amazonaws.com:8080/addchat', {
            chat : userInput,
        }).then((res) => {
            console.log('add chat seccese')
        })
        .catch((error) => {
            console.log(error);
            throw new Error(error);
        });
        setUsetInput('');
    }

    //scroll botton fiexed
    const scrollRef = useRef();
    useEffect(() => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [getChat])



    return (
        <>
        {
            users == null 
                ? <></> 
                : (
                    <section id='section4' className='content-item'>
                        <h2>Chat Room</h2>
                        <div ref={scrollRef} className="chatroom">
                            <ul>
                                {
                                    users.map((user)=>{
                                        return (
                                            <li>
                                                <div className="chatInfo">
                                                    <span className="userName">{user.user_id}</span>
                                                    <span className="chatTime">{user.time}</span>
                                                </div>
                                                <div className="chat">{user.content}</div>
                                            </li>
                                        )
                                    })
                                }
                                {/* <li className="myChat">
                                    <div className="chatInfo">
                                        <span className="userName">Moon Jiuk</span>
                                        <span className="chatTime">2022.05.05 20:51</span>
                                    </div>
                                    <div className="chat">안녕하세요 저는 문지욱입니다</div>
                                </li> */}
                            </ul>
                        </div>
                        <div className="chatInput">
                            <input placeholder="입력하세요" onChange={inputChange}></input>
                            <button onClick={addChat}>전송</button>
                        </div>
                    </section>
                )  
            }
        
        </>
    )
}

export default Chatroom;