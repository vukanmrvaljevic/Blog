import "./header.css"
import Rome from "../../images/rome.jpeg"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Travel</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src={Rome} alt="" />
        </div>
    )
}
