import "./ButtonNav.css";

function ButtonNav(props) {
  return <button className="button">{props.children}</button>;
}

export default ButtonNav;
