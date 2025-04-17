/* eslint-disable for-direction */
import DesktopNav from "../../common/navigation/desktop-nav/DesktopNav";
import Dropdown from "../../common/navigation/desktop-nav/Dropdown";
import DropdownItem from "../../common/navigation/desktop-nav/DropdownItem";
import NavItem from "../../common/navigation/desktop-nav/NavItem";
import { menuItemsData } from "../../common/navigation/mobile-nav/menuItemsData";
import MobileNavbar from "../../common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";

function Header() {
	return (
		<header className="site-header aximo-header-section aximo-header1 dark-bg" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopNav>
							
						
							<NavItem url="zrobtosam">Zrób kuchnie sam!</NavItem>
							<NavItem url="meble">Meble pod wymiar</NavItem>
							<NavItem url="firmy">Meble dla Firm</NavItem>
 <NavItem url="realizacje">Realizacje</NavItem>
							<NavItem url="onas">O nas</NavItem>
							
						</DesktopNav>
					</div>
					<HeaderButton />

					<MobileNavbar menuItemsData={menuItemsData} title="Stolargo" />
				</nav>
			</div>
		</header>
	);
}

export default Header;
