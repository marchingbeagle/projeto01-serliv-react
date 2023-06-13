import ButtonNav from "../ButtonNav";
import "./NavHeader.css";

function NavHeader() {
  return (
    <nav className="nav-header">
      <ButtonNav>Início</ButtonNav>
      <ButtonNav>Blog</ButtonNav>
      <ButtonNav>Cursos</ButtonNav>
    </nav>
  );
}

export default NavHeader;
