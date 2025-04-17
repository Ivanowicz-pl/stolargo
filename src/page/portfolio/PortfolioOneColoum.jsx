import BreadCrumb from "../../components/common/Breadcrumb";
import PortfolioList from "../../components/portfolio/one/PortfolioList";
function PortfolioOneColumn() {
	return (
		<>
			<BreadCrumb title="Nasze realizacje" />
			<PortfolioList />
		</>
	);
}

export default PortfolioOneColumn;
