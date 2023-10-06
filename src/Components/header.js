
function Header()
{
return(
<div>
<h1>Header Component</h1>
</div>
)
}

export default Header;

export function Nav()
{
return(
<div>
<h1>Nav component</h1>
</div>
)
}
export function Papa(props)
{
return(
<div>
<h1>Nav component {props.age}</h1>
</div>
)
}
