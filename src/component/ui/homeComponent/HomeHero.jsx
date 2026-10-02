import ReactFullpageModule from "@fullpage/react-fullpage";
import video1 from "../../../assets/video1.mp4";
import video2 from "../../../assets/video2.mp4";
import video3 from "../../../assets/video3.mp4";
import video4 from "../../../assets/video4.mp4";
const ReactFullpage = ReactFullpageModule.default ?? ReactFullpageModule;
const Fullpage = () => (
	<ReactFullpage
		//fullpage options
		licenseKey={"gplv3-license"}
		scrollingSpeed={1000} /* Options here */
		render={({ state, fullpageApi }) => {
			return (
				<ReactFullpage.Wrapper>
					<div className='section'>
						<div className=' bg-amber-500 h-screen relative'>
							<div className=' h-full w-full absolute flex flex-col justify-center items-center '>
								<h1 className=' max-w-[600px] mx-10 font-medium text-4xl text-center text-white mb-3'>
									We're building the future of human connection
								</h1>
								<button className=' px-5 py-3 bg-blue-600 text-white rounded-full'>
									Our Mission
								</button>
							</div>
							<video
								className=' w-full h-full object-cover'
								autoPlay
								loop
								src={video1}
							></video>
						</div>
					</div>
					<div className='section'>
						<div className='h-screen relative'>
							<video
								className='w-full h-full object-cover'
								autoPlay
								loop
								src={video2}
							></video>
						</div>
					</div>
					<div className='section'>
						<div className='h-screen relative'>
							<video
								className='w-full h-full object-cover'
								autoPlay
								loop
								src={video3}
							></video>
						</div>
					</div>
					<div className='section'>
						<div className='h-screen relative'>
							<video
								className='w-full h-full object-cover'
								autoPlay
								loop
								src={video4}
							></video>
						</div>
					</div>
				</ReactFullpage.Wrapper>
			);
		}}
	/>
);

// const root = ReactDOM.createRoot(document.getElementById("react-root"));
// root.render(<Fullpage />);

export default Fullpage;
