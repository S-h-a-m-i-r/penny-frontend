import ButtonComponent from "../components/ButtonComponent"

const LandingPage = () => {
  return (
		<div className="font-sans w-full m-20">
			<div className="flex flex-col gap-5 justify-center items-center w-full">
				<h3 className="text-[52px] font-extrabold text-white leading-[63px]"> Never invested before? </h3>
				<h1 className="text-[105px] font-extrabold text-white p-0 leading-[100px]">Now you can with </h1>
				<h2 className="text-[105px] font-extrabold text-dollarBillGreen leading-[128px]"> Penny Saved </h2>
				<p className="text-2xl leading-[29px] font-light text-white">
					Use pennies that will grow into dollars , Through Round-Ups, Penny Saved <br /> automatically invests money
					from your cashless purchases.
				</p>
				<ButtonComponent title="Get Started , It’s fun" styles={styles.getStartedButton} />
			</div>
		</div>
	);
}

export default LandingPage

const styles = {
  getStartedButton: {
    width: '284px',
    height: '72px',
    padding: '0px',
    border: '1px solid white',
    background: 'transparent',
    borderRadius: '100px',
    marginTop: '32px'
  }
}
