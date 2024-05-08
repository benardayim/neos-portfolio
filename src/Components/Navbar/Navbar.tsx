import Style from "./Navbar.module.scss";

function Navbar() {
    return (<nav className={ Style.Navbar }>
        <div className={ Style.Logo }>
            <img src="https://picsum.photos/600/200?random=logo"/>
        </div>
        <ul className={ Style.NavElements }>
            <li><a href="#">Ana Sayfa</a></li>
            <li><a href="#">Hakkımızda</a></li>
            <li><a href="#">Hizmetlerimiz</a></li>
            <li><a href="#">İletişim</a></li>
        </ul>
    </nav>)
}

export { Navbar };
