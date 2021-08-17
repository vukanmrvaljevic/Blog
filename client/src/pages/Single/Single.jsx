import "./single.css"
import SinglePost from "../../components/SinglePost/SinglePost"
import Sidebar from "../../components/Sidebar/Sidebar"

export default function Single() {
    return (
        <div>
            <div className="single">
                <SinglePost />
                <Sidebar />
            </div>
        </div>
    )
}

