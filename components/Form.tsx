"use client"

export default function Form() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("submitted")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 md:gap-6 text-[15px] md:text-lg leading-5 md:leading-7 font-medium"
    >
      <p>
        Join our community for free{" "}
        <span className="opacity-50">
          to get exclusive early
          <br /> access for future drops, important updates, and
          <br /> behind-the-scenes insights.
        </span>
      </p>

      <div className="flex items-center gap-2 md:gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="max-w-60 md:max-w-80 w-full h-12 md:h-14 px-5 md:px-6 rounded-full bg-[#E8E8E8] placeholder:text-foreground/50"
        />
        <button
          type="submit"
          tabIndex={0}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-6 md:h-6"
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
