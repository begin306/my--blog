import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function ProjectPage() {
  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-8 text-center">프로젝트소개</h1>
      <h1 className="text-center">실습한 프로젝트들</h1>

      <div className="flex justify-center gap-14">
        <div className="bg-gray-200 border border-slate-400 px-4 py-2 rounded-md w-80 h-81 flex flex-col items-center mb-6 transition-transform duration-300 transform hover:scale-105">
          <h1 className="text-lg font-bold mb-10">HCJ Demo</h1>
          <div className="flex justify-center mb-10">
            <Image src="/pingpong.jpg" width={300} height={300} alt="profile" />
          </div>
          <h1 className="text-center mb-4 font-bold">탁구 스코어</h1>
          <p>
            {' '}
            html과 css를 이용하여 간단하게 디자인을한뒤 자바스크립트를사용하여
            클릭하면 점수가 올라가도록 설계한 탁구스코어점수판입니다
          </p>
          <Link href="#" className="text-green-800">
            link
          </Link>
        </div>

        <div className="bg-gray-200 border border-slate-400 px-4 py-2 rounded-md w-80 h-81 flex flex-col items-center mb-6 transition-transform duration-300 transform hover:scale-105">
          <h1 className="text-lg font-bold mb-10">Kiosk</h1>
          <div className="flex justify-center mb-10">
            <Image src="/menu.jpg" width={300} height={300} alt="profile" />
          </div>
          <h1 className="text-center mb-4 font-bold">
            메뉴 주문 키오스크 예제
          </h1>
          <p>
            getElementById과 같은기능을 사용하여 중국집의 음식가격을
            계산하도록하여 사용자의 이벤트에 따른 응답을 수행하도록 하는 간단한
            프로젝트{' '}
          </p>
          <Link href="#" className="text-green-800">
            link
          </Link>
        </div>

        <div className="bg-gray-200 border border-slate-400 px-4 py-2 rounded-md w-80 h-81 flex flex-col items-center mb-6 transition-transform duration-300 transform hover:scale-105">
          <h1 className="text-lg font-bold mb-10">도서출판</h1>
          <div className="flex justify-center mb-10">
            <Image src="/booklist.jpg" width={300} height={300} alt="profile" />
          </div>
          <h1 className="text-center mb-4 font-bold">도서출판 예제</h1>
          <p>
            querySelector와 getElementById의 기능을 사용하여 책의 저자와 제목을
            저장하는 간단한 프로젝트
          </p>
          <Link href="#" className="text-green-800">
            link
          </Link>
        </div>
      </div>
    </div>
  )
}
