import GetStartedIcon from '../assets/icons/GetStartedIcon';
import RefreshIcon from '../assets/icons/RefreshIcon';
import { InfoCard } from '../components/InfoCard';
import HowItWorks from '../assets/icons/HowItWorks';
import ButtonComponent from '../components/ButtonComponent';
import WalletIcon from '../assets/icons/WalletIcon';
import LinkIcon from '../assets/icons/LinkIcon';
import InvestmentIcon from '../assets/icons/InvestmentIcon';
import InvestmentAllocationSection from '../assets/InvestmentAllocationSection.png';
import SecurityIcon from '../assets/icons/SecurityIcon';
import ChatBubbles from '../assets/L-Chat Bubbles.png';

const LandingPage = () => {
	return (
		<div className="font-sans w-full flex flex-col mb-10 ">
			{/* HERO SECTION */}
			<div className="flex flex-col gap-5 justify-center items-center w-full mt-20 mb-10">
				<h3 className="text-[52px] font-extrabold leading-[63px]"> Never invested before? </h3>
				<h1 className="text-[105px] font-extrabold p-0 leading-[100px]">Now you can with </h1>
				<h2 className="text-[105px] font-extrabold text-dollarBillGreen leading-[128px]"> Penny Saved </h2>
				<p className="text-2xl leading-[29px] font-light text-center">
					Use pennies that will grow into dollars , Through Round-Ups, Penny Saved <br /> automatically invests money
					from your cashless purchases.
				</p>
				<button className="group w-[284px] font-semibold h-[72px] p-0 border border-white bg-transparent mt-8 hover:bg-dollarBillGreen hover:text-black hover:border-dollarBillGreen transition duration-300 ease-in-out rounded-full flex items-center justify-center cursor-pointer gap-2">
					Get Started, It's fun
					<p className="hidden group-hover:block transition-opacity duration-300">
						<GetStartedIcon />
					</p>
				</button>
			</div>
			{/* CARDS SECTION */}
			<div className="my-10">
				<p className="text-lg font-normal "> Why Penny Saved is the Smart Choice?</p>
				<h4 className="text-2xl font-semibold mt-2">Investing made easy, secure, and accessible for everyone.</h4>
				<div className="flex gap-5 flex-wrap mt-14 w-full">
					{cardData.map((card) => (
						<InfoCard title={card.title} icon={card.icons} description={card.description} />
					))}
				</div>
			</div>
			{/* HOW IT WORKS SECTION */}
			<div className="my-10 flex justify-between items-center">
				<div className="flex flex-col justify-center gap-5">
					<div className="flex flex-col gap-3">
						<HowItWorks />
						<h4> How it works?</h4>
						<p className="max-w-[407px]"> Get Started in Just 3 Easy Steps Simple, secure, and seamless.</p>
					</div>
					<ButtonComponent
						title="Join Now"
						styles="w-[157px] h-[52px] rounded-full bg-[#85BB65] text-black text-lg font-semibold border-none hover:bg-dollarBillGreen transition-hover duration-300"
					/>
				</div>
				<div className="max-w-[393px] flex flex-col gap-5">
					{handleWorkTitle.map(({ Icon, id, title, width }) => (
						<div className={`bg-[#242433] text-dollarBillGreen rounded-full w- flex gap-2 p-5 self-end ${width}`}>
							{Icon}
							<p> {id}</p>
							<p> {title}</p>
						</div>
					))}
				</div>
			</div>
			{/* REAL TIME PORTFOLIO TRACKING */}
			<div className="my-10 w-full flex justify-between items-center">
				<div className="max-w-[589px] flex flex-col gap-2">
					<p className="text-[#B3B5BC] text-[18px] text-normal leading-[24px]">See Your Money Work for You</p>
					<h3 className="text-gray-200 text-[28px] leading-[34px] font-semibold">
						Real-time portfolio tracking with easy-to-read insights.
					</h3>
					<p className="text-[#B3B5BC] text-[18px] text-normal leading-[24px]">
						Track the performance of your investments with detailed graphs and data. View your portfolio’s daily,
						weekly, or monthly progress, and make informed decisions with real-time access to how your investments are
						growing.
					</p>
				</div>
				<div>
					<img src={InvestmentAllocationSection} alt="Investment allocation section" />
				</div>
			</div>
			{/*  SECURITY SECTION */}
			<div className="my-10 flex justify-between items-center">
				<div>
					<SecurityIcon />
				</div>
				<div className="max-w-[589px] text-right flex flex-col gap-3">
					<p className="text-[#B3B5BC] text-[18px] text-normal leading-[24px]">Your Security is Our Top Priority</p>
					<h3 className="text-gray-200 text-[28px] leading-[34px] font-semibold">
						Bank-level encryption and two-factor authentication for your peace of mind
					</h3>
					<p className="text-[#B3B5BC] text-[18px] text-normal leading-[24px]">
						We take security seriously. Penny Saved protects your data with industry-leading encryption and secure
						connections. Rest assured that your personal and financial information is always safe.
					</p>
				</div>
			</div>
			{/* QUESTION SECTION */}
			<div className="w-full flex flex-col justify-cente items-center gap-8">
				<div className="text-center">
					<p className="text-[#B3B5BC] text-[18px] text-normal leading-[24px]">We’re Here To Help</p>
					<h3 className="text-gray-200 text-[28px] leading-[34px] font-semibold">Have questions?</h3>
					<h3 className="text-gray-200 text-[28px] leading-[34px] font-semibold">Reach out to us anytime.</h3>
				</div>
				<div className=" bg-[#242433] min-h-[360px] w-[47.7rem] rounded-lg flex items-center justify-between pl-10 relative">
					<div className="max-w-[382px] w-full flex gap-4 flex-col justify-center">
						<p className="font-semibold text-dollarBillGreen text-[18px]">Submit A Ticket</p>
						<div className="flex flex-col gap-2">
							<label className="text-gray-200 text-[14px] font-normal leading-[17px]">Your Problem / Suggestion</label>
							<input
								type="text"
								placeholder="Enter your inquiry here."
								className="w-full p-3 border border-[#999CA6] rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-[#999CA6] transition"
							/>
						</div>
						<ButtonComponent
							title="Submit"
							styles="w-[133px] bg-dollarBillGreen text-black font-semibold rounded-full h-[41px] mt-3 border-none"
						/>
					</div>
					<div className="w-[250px] max-h-[250px] absolute right-0">
						<img src={ChatBubbles} />
					</div>
				</div>
      </div>
		</div>
	);
};

export default LandingPage;

const cardData = [
	{
		title: 'Always Stay up to date',
		description: 'Real-time tracking: Stay updated with live insights into your portfolio’s performance.',
		icons: <RefreshIcon />,
	},
	{
		title: 'No Effort Needed',
		description: 'Automated investments: Link your cards and let Penny Saved do the work for you.',
		icons: <RefreshIcon />,
	},
	{
		title: 'Save for your future',
		description: 'If you invest only $3 a day, at the end of a year you’ll have invested over $1000 in the market.',
		icons: <RefreshIcon />,
	},
];

const handleWorkTitle = [
	{
		id: '01',
		Icon: <LinkIcon />,
		title: 'Link Your Account',
		width: 'w-[278px]',
	},
	{
		id: '02',
		Icon: <WalletIcon />,
		title: 'Round-Up Your Purchases',
		width: 'w-[364px]',
	},
	{
		id: '03',
		Icon: <InvestmentIcon />,
		title: 'Watch Your Investments Grow',
		width: 'w-[393px]',
	},
];
