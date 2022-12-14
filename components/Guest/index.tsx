import Header from '@/components/Header'
import Image from 'next/image'

interface IGuestProps {
	metamask: any
}

const Guest = ({ metamask }: IGuestProps) => {
	const connectWallet = async () => {
		await metamask.request({
			method: 'eth_requestAccounts',
		})
	}

	return (
		<div>
			<Header btnName='Go Home' walletAddress={null} />
			<div
				data-id='glow-center'
				className='glow bottom-0 left-[25vh] w-[71.11vh] h-[71.11vh]'
			/>
			<main className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
				<h1 className='font-semibold text-[32px] text-center italic mb-[4.44vh] text-rare dark:text-primary'>
					You aren't <span className='text-secondary underline'>Connected</span>
					!
				</h1>

				<div className='relative h-[44.44vh] w-[50vw] mb-[4.44vh]'>
					<Image src='/unauthImage.svg' alt='image' layout='fill' />
				</div>
				<p className='text-[14px] font-medium text-center text-rare/75 dark:text-primary/75 mb-[2.2vh]'>
					Connect Using Your <span className='italic font-semibold'>Web3</span>{' '}
					Wallet!
				</p>
				<button
					onClick={() => connectWallet()}
					className='bg-secondary font-medium text-base rounded-md px-4 py-[12px] block mx-auto text-primary hover:bg-rare dark:hover:bg-gray-700 hover:scale-105 transition'>
					Let's Get In
				</button>
			</main>
		</div>
	)
}

export default Guest
