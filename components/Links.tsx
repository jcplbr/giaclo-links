import Link from "next/link"

type Link = {
  active: boolean
  label: string
  href: string
}

export default function Links() {
  const links: Link[] = [
    {
      active: true,
      label: "Instagram",
      href: "https://www.instagram.com/giaclo.labs/",
    },
    {
      active: true,
      label: "TikTok",
      href: "https://www.tiktok.com/@giaclo.labs",
    },
    { active: true, label: "Contact", href: "mailto:info@giaclo.com" },
    { active: false, label: "Store", href: "#" },
  ]

  return (
    <div className="flex flex-col gap-2 sm:gap-4 lg:gap-6">
      {links.map((link) => {
        if (link.active) {
          return (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              tabIndex={0}
              className="text-xl sm:text-4xl lg:text-[3.5rem] lg:leading-[3.5rem] font-medium cursor-ne-resize"
            >
              {link.label}
            </Link>
          )
        }
        return (
          <div
            key={link.label}
            className="flex items-center justify-between text-xl sm:text-4xl lg:text-[3.5rem] lg:leading-[3.5rem] font-medium opacity-50 cursor-not-allowed"
          >
            {link.label}
            <div className="flex items-center justify-center h-8 sm:h-10 lg:h-12 px-3 sm:px-4 lg:px-5 border-[1.5px] border-foreground rounded-full text-[15px] sm:text-lg lg:text-xl font-medium select-none">
              Coming Soon
            </div>
          </div>
        )
      })}
    </div>
  )
}
