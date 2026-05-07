/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/resume.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Sanchita_Mishra_Resume.pdf"',
          },
        ],
      },
    ]
  },
}

export default nextConfig
