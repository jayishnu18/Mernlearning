import "./sta.css"
function F1()
{
    const mystyle= {
        color:"red",
        backgroundColor:"blue",
    }
    return(
        <div>
            <hi style={{color:"red"}}>HI</hi><br></br>
            <hi style={mystyle}>my name is Jayishnu</hi>
            <hi class="jay">Hello bosss</hi><br></br>
            <hi class="text-danger text-center">hrhe</hi>
        </div>
    )
}
export default F1;

export function Home()
{
    return <h1>Home component</h1>
}

export function About()
{
    return <h1>About component</h1>
}

