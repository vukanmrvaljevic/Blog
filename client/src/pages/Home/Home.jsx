import { useState, useEffect} from "react"
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./home.css";
import axios from "axios";

export default function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts")
            console.log(res)
            setPosts(res.data)
        }
        fetchPosts()
    }, [])
  return (
    <>
      <Header />
      <div className="home">
              <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  )
} 

