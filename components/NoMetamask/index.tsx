import Header from '../Header'
import Image from 'next/image'
import Link from 'next/link'
const NoMetamask = () => {
	return (
		<main>
			<Header btnName='Go Home' walletAddress={null} />
			<div className='text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
				<div className='relative  h-[32.8vh] mb-[4.44vh]'>
					<Image
						layout='fill'
						src='/metaMaskFox.svg'
						className='object-contain'
					/>
				</div>
				<h1 className='text-rare italic font-semibold text-[32px] mb-[2.22vh]'>
					Oops, Looks Like You don't Have{' '}
					<span className='text-secondary underline'>Metamask</span>!
				</h1>
				<p className='text-rare/75 text-sm font-medium mb-[2.22vh]'>
					Currently We Only Support{' '}
					<span className='italic font-semibold'>metamask</span> wallet
				</p>
				<p className='text-rare/75 text-sm font-medium mb-[4.44vh]'>
					Install from{' '}
					<a
						target='_blank'
						href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en'
						rel='noopener noreferrer'
						className='italic cursor-pointer text-secondary font-semibold'>
						Chrome Web Store
					</a>{' '}
					|{' '}
					<a
						target='_blank'
						href='https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/'
						rel='noopener noreferrer'
						className='italic cursor-pointer text-secondary font-semibold'>
						Mozilla Add-Ons
					</a>
				</p>
				<button
					onClick={() => window.location.reload()}
					className='bg-secondary font-medium text-base rounded-md px-4 py-[12px] block mx-auto text-primary hover:bg-rare hover:scale-105 transition'>
					Reassess
				</button>
			</div>
		</main>
	)
}

export default NoMetamask