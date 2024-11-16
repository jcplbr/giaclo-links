import Image from "next/image"

export default function Header() {
  return (
    <header className="flex flex-col gap-4">
      <Image
        src="/images/logo.svg"
        alt="GIACLO logo"
        width={64}
        height={64}
        draggable={false}
        referrerPolicy="no-referrer"
        className="rounded-full md:w-[4.5rem] md:h-[4.5rem] select-none pointer-events-none"
      />
      <div className="text-xl md:text-2xl">
        <h1 className="font-bold">
          GIACLO<span className="font-medium">™</span>
        </h1>
        <p className="font-medium opacity-50">Feel Good, Do Better.</p>
      </div>
    </header>
  )
}
