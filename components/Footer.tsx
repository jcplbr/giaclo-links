export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-xs sm:text-sm lg:text-base opacity-50">
      © {currentYear} — All rights reserved.
    </footer>
  )
}
