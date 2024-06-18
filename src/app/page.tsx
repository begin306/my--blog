import Image from 'next/image'
import Link from 'next/link'
import '../styles/styles.css'

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">My Next.js Blog</h1>
      <h1 className="text-center">사용한 기술들</h1>
      <div className="container">
        <div className="flex justify-center gap-14">
          <div className="flex flex-col items-center max-w-xs">
            <Image src="/OIP.jpeg" alt="blog" width={270} height={270} />
            <h1 className="text-2xl font-bold mt-2 text-center">Next.js</h1>
            <p className="text-center">
              Next.js는 리액트를 위해 만든 오픈소스 자바스크립트 웹
              프레임워크로, 리액트에는 없는 서버 사이드 렌더링, 정적 사이트 생성
              과 같은 다양하고 풍부한 기능을 제공합니다.
            </p>
            <Link
              href="https://nextjs.org/"
              className="px-6 text-red-400"
              target="_blank"
            >
              <h2 className="font-bold  hover:text-blue-700">
                {' '}
                next.js 페이지로 이동{' '}
              </h2>
            </Link>
          </div>
          <div className="flex flex-col items-center max-w-xs">
            <Image src="/nodejs.jpeg" alt="blog" width={470} height={470} />
            <h1 className="text-2xl font-bold mt-2 text-center">Node.js</h1>
            <p className="text-center">
              Node.js는 자바스크립트를 위한 런타임 환경으로, 서버 측
              애플리케이션을 구축할 수 있습니다.
            </p>
            <Link
              href="https://nodejs.org/en/download/package-manager"
              className="px-6 text-red-400"
              target="_blank"
            >
              <h2 className="font-bold  hover:text-blue-700">
                nodejs 페이지로 이동
              </h2>
            </Link>
          </div>
          <div className="flex flex-col items-center max-w-xs">
            <Image src="/github.jpg" alt="blog" width={380} height={380} />
            <h1 className="text-2xl font-bold mt-2 text-center">GitHub</h1>
            <p className="text-center">
              GitHub는 소프트웨어 개발프로젝트를 위한 버전 관리 및 협업
              플랫폼입니다..
            </p>
            <Link
              href="https://github.com/"
              className="px-6 text-red-400"
              target="_blank"
            >
              <h2 className="font-bold  hover:text-blue-700">
                github 페이지로 이동
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
