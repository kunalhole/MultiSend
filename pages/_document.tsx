import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body
				style={{
					backgroundImage: 'url(/bgCircles.png)',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'repeat-y',
					backgroundAttachment: 'fixed',
				}}
				className='font-poppins w-full min-h-screen relative overflow-hidden'>
				<div
					data-id='glow-top-left'
					className='glow w-80 h-80 -top-40 -left-11'
				/>
				<div
					data-id='glow-top-right'
					className='glow w-80 h-80 -top-[104px] -right-14'
				/>
				<div
					data-id='bottom-right'
					className='glow w-[448px] h-[448px] -right-[172px] -bottom-[174px]'
				/>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
