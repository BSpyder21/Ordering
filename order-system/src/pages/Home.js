import {Link} from "react-router-dom"
function LandingPageButton() {    
  return <Link to="/about-us" class="nav-link">
        <button class="btn btn-primary" > 
            <span style={{"font-size": "24px", "color": "Brown"}}>
                About Us!
            </span>
        </button>
    </Link>
}
function LandingFrameMessage() {
  const style = {
        margin: "auto",
        padding: "20% 15% 15% 15%",
        color: "Black",
    }    
    return <div style={style}>
        
        <div style={{"font-size": "96px"}}>
            Welcome to Pizza Planet!
        </div>
        
        <div style={{"font-size": "36px"}}>
           Come in and see what all the "Buzz" is about.<br />
           Kindly use the navigation menu at the top.
        </div>        
        <br />        
        <LandingPageButton />    
      </div>
}function LandingFrame() {
    const style = {
        "background-image": `url("images/HomePage.jpg")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%",
    }    
    return <div style={style}>
        <LandingFrameMessage />
    </div>
}function HomePage() {
    return <div>
        <LandingFrame />
    </div>
}export default HomePage