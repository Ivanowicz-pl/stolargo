import { createBrowserRouter } from "react-router-dom";
import LayoutEight from "../components/layout/LayoutEight.jsx";
import LayoutFive from "../components/layout/LayoutFive.jsx";
import LayoutFour from "../components/layout/LayoutFour.jsx";
import LayoutOne from "../components/layout/LayoutOne.jsx";
import LayoutSeven from "../components/layout/LayoutSeven.jsx";
import LayoutSix from "../components/layout/LayoutSix.jsx";
import LayoutThree from "../components/layout/LayoutThree.jsx";
import LayoutTwo from "../components/layout/LayoutTwo.jsx";
import Layout from "../components/layout/index.jsx";
import ErrorPage from "../error-page";
import AboutUs from "../page/AboutUs";
import ContactUs from "../page/ContactUs";
import Pricing from "../page/Pricing";
import Reset from "../page/auth/ResetPassword.jsx";
import SignIn from "../page/auth/SignIn";
import SignUp from "../page/auth/SignUp";
import BlogGridPage from "../page/blog/BlogGridPage.jsx";
import BlogPage from "../page/blog/BlogPage.jsx";
import SingleBlogPage from "../page/blog/SingleBlog.jsx";
import HomeFive from "../page/home/HomeFive.jsx";
import HomeFour from "../page/home/HomeFour.jsx";
import HomeOne from "../page/home/HomeOne.jsx";
import HomeSeven from "../page/home/HomeSeven.jsx";
import HomeSix from "../page/home/HomeSix.jsx";
import HomeThree from "../page/home/HomeThree.jsx";
import HomeTwo from "../page/home/HomeTwo.jsx";
import PortfolioOneColumn from "../page/portfolio/PortfolioOneColoum";
import PortfolioTwoColumn from "../page/portfolio/PortfolioTwoColumn";
import SinglePortfolio from "../page/portfolio/SinglePortfolio";
import Service from "../page/service";
import SingleService from "../page/service/SingleService.jsx";
import Team from "../page/team";
import SingleTeam from "../page/team/SingleTeam.jsx";
import CommingSoon from "../page/utility/CommingSoon.jsx";
import Faq from "../page/utility/Faq.jsx";
import TestimonialPage from "../page/utility/Testimonial.jsx";
import Akcesoria from "../page/akcesoria/SingleService.jsx";
import Rel1 from "../page/portfolio/portdet/rel1.jsx"
import Rel2 from "../page/portfolio/portdet/rel2.jsx"
import Rel3 from "../page/portfolio/portdet/rel3.jsx"
import Rel4 from "../page/portfolio/portdet/rel4.jsx"
import Rel5 from "../page/portfolio/portdet/rel5.jsx"
import Rel6 from "../page/portfolio/portdet/rel6.jsx"
import Rel7 from "../page/portfolio/portdet/rel7.jsx"
import Rel8 from "../page/portfolio/portdet/rel8.jsx"
import Rel9 from "../page/portfolio/portdet/rel9.jsx"
import Rel10 from "../page/portfolio/portdet/rel10.jsx"
import Rel11 from "../page/portfolio/portdet/rel11.jsx"
import Rel12 from "../page/portfolio/portdet/rel12.jsx"
import Rel13 from "../page/portfolio/portdet/rel13.jsx"
import Rel14 from "../page/portfolio/portdet/rel14.jsx"
import Rel15 from "../page/portfolio/portdet/rel15.jsx"
import Rel16 from "../page/portfolio/portdet/rel16.jsx"
import Rel17 from "../page/portfolio/portdet/rel17.jsx"
import Rel18 from "../page/portfolio/portdet/rel18.jsx"
import Rel19 from "../page/portfolio/portdet/rel19.jsx"
import Rel20 from "../page/portfolio/portdet/rel20.jsx"
import Rel21 from "../page/portfolio/portdet/rel21.jsx"
import Zrobtosam from "../page/Zrobtosam.jsx"
import Firmy from "../page/firmy.jsx"
import Meble from "../page/meble.jsx"





export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <LayoutOne />,
				children: [
					{
						path: "/",
						element: <HomeOne />,
					},
				
					{
						path: "/onas",
						element: <AboutUs />,
					},
					{
						path: "/akcesoria",
						element: <Akcesoria />,
					},
					{
						path: "/kontakt",
						element: <ContactUs />,
					},
					{
						path: "/faq",
						element: <Faq />,
					},

					{
						path: "/testimonial",
						element: <TestimonialPage />,
					},

					{
						path: "/pricing",
						element: <Pricing />,
					},
					{
						path: "/blog",
						element: <BlogPage />,
					},
					{
						path: "/single-blog",
						element: <SingleBlogPage />,
					},
					{
						path: "/blog-grid",
						element: <BlogGridPage />,
					},
					{
						path: "/service",
						element: <Service />,
					},
					{
						path: "/materiały",
						element: <SingleService />,
					},
					{
						path: "/team",
						element: <Team />,
					},
					{
						path: "/single-team",
						element: <SingleTeam />,
					},
					{
						path: "/realizacje",
						element: <PortfolioOneColumn />,
					},
					{
						path: "/portfolio-two",
						element: <PortfolioTwoColumn />,
					},
					{
						path: "/single-portfolio",
						element: <SinglePortfolio />,
					},
					{
						path: "*",
						element: <ErrorPage />,
					},
					{
						path: "/Rel1",
						element: <Rel1 />,
					},
					{
						path: "/Rel2",
						element: <Rel2 />,
					},
					{
						path: "/Rel3",
						element: <Rel3 />,
					},
					{
						path: "/Rel4",
						element: <Rel4 />,
					},
					{
						path: "/Rel5",
						element: <Rel5 />,
					},
					{
						path: "/Rel6",
						element: <Rel6 />,
					},
					{
						path: "/Rel7",
						element: <Rel7 />,
					},
					{
						path: "/Rel8",
						element: <Rel8 />,
					},
					{
						path: "/Rel9",
						element: <Rel9 />,
					},
					{
						path: "/Rel10",
						element: <Rel10 />,
					},
					{
						path: "/Rel11",
						element: <Rel11 />,
					},
					{
						path: "/Rel12",
						element: <Rel12 />,
					},
					{
						path: "/Rel13",
						element: <Rel13 />,
					},
					{
						path: "/Rel14",
						element: <Rel14 />,
					},	
					{
						path: "/Rel15",
						element: <Rel15 />,
					},	
					{
						path: "/Rel16",
						element: <Rel16 />,
					},
					{
						path: "/Rel17",
						element: <Rel17 />,
					},
					{
						path: "/Rel18",
						element: <Rel18 />,
					},
					{
						path: "/Rel19",
						element: <Rel19 />,
					},
					{
						path: "/Rel20",
						element: <Rel20 />,
					},
					{
						path: "/Rel21",
						element: <Rel21 />,
					},
					{
						path: "/Zrobtosam",
						element: <Zrobtosam />,
					},
					{
						path: "/firmy",
						element: <Firmy />,
					},
					{
						path: "/meble",
						element: <Meble />,
					},
						],
			},
			{
				path: "/",
				element: <LayoutTwo />,
				children: [
					{
						path: "/home-two",
						element: <HomeTwo />,
					},
				],
			},
			{
				path: "/",
				element: <LayoutThree />,
				children: [
					{
						path: "/home-three",
						element: <HomeThree />,
					},
				],
			},
			{
				path: "/",
				element: <LayoutFour />,
				children: [
					{
						path: "/home-four",
						element: <HomeFour />,
					},
				],
			},
			{
				path: "/",
				element: <LayoutFive />,
				children: [
					{
						path: "/home-five",
						element: <HomeFive />,
					},
				],
			},
			{
				path: "/",
				element: <LayoutSix />,
				children: [
					{
						path: "/home-six",
						element: <HomeSix />,
					},
				],
			},
			{
				path: "/",
				element: <LayoutSeven />,
				children: [
					{
						path: "/home-seven",
						element: <HomeSeven />,
					},
				],
			},
			{
				path: "/",
				element: <LayoutEight />,
				children: [
					{
						path: "/coming-soon",
						element: <CommingSoon />,
					},
					{
						path: "/reset-password",
						element: <Reset />,
					},
					{
						path: "/sign-up",
						element: <SignUp />,
					},
					{
						path: "/sign-in",
						element: <SignIn />,
					},
					
				],
			},
		],
	},
]);
