import Image from "next/image"

export default function Header() {
  return (
    <div className="">
      <Image src="/images/logo.webp" alt="logo" width={200} height={60} />
    </div>
  )
}
