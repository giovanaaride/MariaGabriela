import './styles.modules.scss';

function Header() {
  return (
    <div className="containerheader">
      <div className="header">
        <div className="name">
          <div className="mabi">
            <p>Maria Gabriela O. Coutinho</p>
          </div>
        </div>

        <nav className="menu">
          <div className="navbar">
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre-mim">Sobre</a></li>
              <li><a href="#projetos">Projetos</a></li>
              <li><a href="#contatos">Contatos</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;