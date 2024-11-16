import Footer from "@/components/Footer"
import Form from "@/components/Form"
import Header from "@/components/Header"
import Links from "@/components/Links"

export default function Home() {
  return (
    <>
      <div className="block md:hidden">
        <MobileLayout />
      </div>
      <div className="hidden md:block">
        <DesktopLayout />
      </div>
    </>
  )
}

function MobileLayout() {
  return (
    <main className="flex flex-col justify-between h-screen p-6 overflow-hidden">
      <Header />

      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <Links />
          <Form />
        </div>

        <Footer />
      </div>
    </main>
  )
}

function DesktopLayout() {
  return (
    <main className="flex flex-col justify-between h-screen px-[4.5rem] py-12 overflow-hidden">
      <div className="flex items-center justify-between">
        <Header />
        <Form />
      </div>

      <div className="flex flex-col gap-[4.5rem]">
        <Links />
        <Footer />
      </div>
    </main>
  )
}
