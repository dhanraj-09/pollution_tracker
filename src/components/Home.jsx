import "./Homestyle.css"
import free from "../assets/free.jpg"
import free1 from "../assets/free1.png"
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
import styled from "styled-components";





function Home()
{

    const IMG=styled.img``;
    const VIDEO=styled.video``;

    const SOURCE=styled.source``;
    return (
        <>
            <div>
                <nav id={"nav"}>
                    <IMG src={free1}>
                    </IMG>
                    <header4>Home</header4>
                    <header4>Data</header4>
                    <header4>About</header4>
                    <header4>Contact Us</header4>
                </nav>
                <VIDEO width={"750px"} height={"500px"} autoPlay={true} loop={true}>
                    <SOURCE src={video1} type={"video/mp4"}></SOURCE>
                </VIDEO>
            </div>
            <div id={"main"}
        </>
)
}

export default Home