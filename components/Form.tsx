"use client"

import { useRef } from "react"

export default function Form() {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("submitted")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 lg:gap-6 text-[15px] lg:text-lg leading-5 lg:leading-7 font-medium"
    >
      <p className="max-w-[37ch]">
        Join our community for free{" "}
        <span className="opacity-50">
          to get exclusive early access for future drops, important updates, and
          behind-the-scenes insights.
        </span>
      </p>

      <div className="flex items-center gap-2 lg:gap-3">
        <input
          ref={inputRef}
          type="email"
          placeholder="Enter your email"
          className="max-w-60 lg:max-w-72 w-full h-12 lg:h-14 px-5 lg:px-6 rounded-full bg-[#E8E8E8] placeholder:text-foreground/50"
        />
        <button
          type="submit"
          tabIndex={0}
          className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="lg:w-6 lg:h-6"
          >
            <path
              d="M9.33333 3.83333L13.5 7.99999L9.33333 12.1667M13 7.99999H2.5"
              stroke="#FAFAFA"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </form>
  )
}
