/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: '/',
				destination: '/immo',
				permanent: false,
			},
		]
	},
}

module.exports = nextConfig
