import MenuLateral from "../MenuLateral/MenuLateral"
import { DataProvider } from "../../context/DataContext";
import "./Header.css"

export default function Header() {
return (
<DataProvider>
<section className="header__container">
<MenuLateral/>
</section>
</DataProvider>
)
}
