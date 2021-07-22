import SiteHeader from "./SiteHeader";
import { BrowserRouter } from "react-router-dom";

export default {
	title: "Component/SiteHeader",
	component: SiteHeader,
};

export const header = () => (
	<BrowserRouter>
		<SiteHeader />
	</BrowserRouter>
);
