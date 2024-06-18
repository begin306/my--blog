import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function IntroPage() {
  return (
    <div className="container mx-auto flex flex-col items-left">
      <h1 className="text-3xl font-bold mt-6 text-center">나의 소개 페이지</h1>
      <div className="flex flex-row items-start justify-center mt-14">
        <div className="bg-gray-200 border border-slate-400 px-6 py-4 rounded-md mb-14 w-96 h-auto relative ml-[50px]">
          <h1 className="text-2xl font-bold mb-12">자기소개</h1>
          <Image
            src="/my.jpg"
            width="200"
            height="200"
            alt="profile"
            className="mb-4"
          />
          <div>
            <p>연락처: 010-0000-0000</p>
            <h1 className="text-1xl font-bold mb-0">My github : </h1>
            <p>
              <Link
                href="https://github.com/begin306?tab=projects"
                className="text-green-600"
              >
                Github 방문하기
              </Link>
            </p>
            <p>중부대학교 정보보호학과 최도형입니다 만나서 반갑습니다.</p>
          </div>
        </div>
        <div className="flex flex-col items-left ml-24">
          <Image
            src="/teamproject.jpg"
            alt="team project"
            width={600}
            height={600}
            className="mb-4 transition-transform duration-300 transform hover:scale-105"
          />
          <h1 className="text-1xl font-bold mb-0 text-center">
            진행한 팀 프로젝트
          </h1>
          <p>
            웹페이지를 만드는 기술인 css html을 소개하는 웹사이트제작
            프로젝트입니다.
          </p>

          <p className="text-center mt-6">
            <Link
              href="https://github.com/begin306?tab=projects"
              className="text-green-600 "
            >
              프로젝트 사이트 방문하기
            </Link>
          </p>
        </div>
      </div>
      <div className="flex flex-row items-start justify-center mt-10">
        <div className="flex flex-col items-center max-w-xs mb-6">
          <Link href="https://github.com/begin306?tab=projects">
            <Image
              src="/git.jpg"
              alt="blog"
              width={190}
              height={10}
              className="transition-transform duration-300 transform hover:scale-105"
            />
          </Link>
          <h1 className="text-2xl font-bold mt-2 text-center">GitHub</h1>
          <p className="text-center">
            https://github.com/begin306?tab=projects
          </p>
          <Link
            href="https://github.com/begin306?tab=projects"
            className="px-6 text-red-400"
            target="_blank"
          >
            <h2 className="font-bold hover:text-blue-700">
              나의 github 페이지로 이동
            </h2>
          </Link>
        </div>
        <div className="flex flex-col items-center max-w-xs ml-44 mb-8">
          <Link href="https://www.naver.com/">
            <Image
              src="/email.jpg"
              alt="email"
              width={190}
              height={10}
              className="transition-transform duration-300 transform hover:scale-105"
            />
          </Link>
          <h1 className="text-2xl font-bold mt-2 text-center">Email</h1>
          <p className="text-center">chduuuuuu@naver.com</p>
          <Link
            href="https://www.naver.com/"
            className="px-6 text-red-400"
            target="_blank"
          >
            <h2 className="font-bold hover:text-blue-700">
              네이버 홈페이지로 이동
            </h2>
          </Link>
        </div>
      </div>
    </div>
  )
}
