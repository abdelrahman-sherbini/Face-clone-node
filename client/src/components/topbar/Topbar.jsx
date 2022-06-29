import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {useEffect,useState} from "react";
import axios from "axios";
import ReactDOM from 'react-dom'
import React from 'react'
export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
 const [text,setText] = useState("");
const [convo,setConversations] = useState();
	useEffect(
() => {
//	var convo;    
	const getConversations = async () => {
		          try {
				          const res = await axios.get("/users/search/" + text);
				          setConversations(res.data);
				 // console.log(res.data);
			//	 return  res.data
				        } catch (err) {
						        console.log(err);
						      }
		        };
	    getConversations();
	  if(!text){
document.getElementById("dropdown").innerHTML="";
	  }
	
//const resp= await axios.get("/search/"+text)
//console.log(convo);
	},[text])
useEffect(()=>{
if(convo){

	//console.log(convo[0].username);
const doit = async ()=>{
 var select = document.getElementById("dropdown");
                 //    arr = ["html","css","java","javascript","php","c++","node.js","ASP","JSP","SQL"];
             var bla;
             for(var i = 0; i < convo.length; i++)
             {
	     if(bla ==convo[i].username){continue;}
	  //   <a onClick={() => {window.location.href="/something"}}>Something</a>
                // var option = document.createElement("OPTION"),
                 //   txt = document.createTextNode(convo[i].username);
                // const lin =(<> <Link   to={"/profile/" + convo[i].username}    style={{ textDecoration: "none" }}></Link></>);
	    var a = document.createElement('a');
	          var linkText = document.createTextNode(convo[i].username+"\n");
		        a.appendChild(linkText);
			      //a.title = convo[i].username;
			            a.href = "/profile/"+convo[i].username;


	   //ReactDOM.render(lin,select);
	   // select.innerHTML += `<a onClick={() => {window.location.href="/profile/${convo[i].username}"}}>jon</a>`
	    

	    console.log(select.innerHTML);
//option.appendChild(txt);
  //               option.setAttribute("value",convo[i].username);
//		 option.setAttribute('onclick','dou();');
 //                select.insertBefore(option,select.lastChild);
           select.appendChild(a);
	   bla = convo[i].username;
	    }
}
doit();

}
else{
document.getElementById("dropdown").innerHTML="";
}
},[convo])
	return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Face Clone</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input onChange={e=>setText(e.target.value)}
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
		 
<div id="dropdown" className="dropdowncontent"></div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}
