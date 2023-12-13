import dynamic from "next/dynamic"

const Wheels2 = dynamic(
  () => {
    return import("../components/Wheels")
  },
  { ssr: false }
)

export default function Home() {
  return (
    <main className="flex flex-1 justify-center items-center overflow-hidden">
      <Wheels2 />
    </main>
  )
}
