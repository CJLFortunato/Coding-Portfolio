import Link from "next/link";

function Header () {
  return (
    <header>
      <h4>Clémence Fortunato</h4>
      <nav>
        <ul>
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/projects">Projets</Link></li>
          <li><Link href="/timeline">Chronologie</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;