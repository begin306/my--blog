import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl text-center font-bold mb-12">
        이웹페이지에대한 평가
      </h1>
      <div className="flex flex-row justify-center space-x-4 mb-14">
        <Image
          src="/page1.jpg"
          width="420"
          height="420"
          alt="profile"
          className="transition-transform duration-300 transform hover:scale-105"
        />
        <Image
          src="/page2.jpg"
          width="420"
          height="420"
          alt="profile"
          className="transition-transform duration-300 transform hover:scale-105"
        />
        <Image
          src="/page3.jpg"
          width="420"
          height="420"
          alt="profile"
          className="transition-transform duration-300 transform hover:scale-105"
        />
      </div>

      <div className="flex flex-row justify-center space-x-8 mb-14">
        <div className="flex flex-col items-center max-w-xs mb-8">
          <Image
            src="/like1.jpg"
            alt="email"
            width={100}
            height={10}
            className="transition-transform duration-300 transform hover:scale-105"
          />

          <h1 className="text-2xl font-bold mt-8 text-center">좋아요</h1>
          <p className="text-center">1</p>
        </div>

        <div className="flex flex-col items-center max-w-xs mb-8">
          <Image
            src="/bad.jpg"
            alt="email"
            width={190}
            height={10}
            className="transition-transform duration-300 transform hover:scale-105"
          />

          <h1 className="text-2xl font-bold mt-2 text-center">싫어요</h1>
          <p className="text-center">0</p>
        </div>
      </div>

      <div
        className="bg-gray-200 border border-slate-400 px-6 py-4 rounded-md mb-4"
        style={{ width: '600px', height: '300px' }}
      >
        <h1 className="text-2xl font-bold mb-4">댓글을 달아주세요</h1>
        <form className="mb-4">
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md resize-none"
            placeholder="댓글을 입력하세요..."
          ></textarea>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-blue-400 text-white rounded-md"
            >
              제출
            </button>
            <button
              type="reset"
              className="mt-2 px-4 py-2 bg-blue-400 text-white rounded-md"
            >
              지우기
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
