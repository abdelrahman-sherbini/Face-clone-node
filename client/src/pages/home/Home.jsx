import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Home() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  //const username = useParams().username;

  const  usernamee  = useContext(AuthContext);
const ioa = usernamee.user.username
console.log(usernamee.user);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${ioa}`);
      setUser(res.data);
    };
    fetchUser();
  }, [ioa]);


  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed/>
        <Rightbar user={user}/>
      </div>
    </>
  );
}
