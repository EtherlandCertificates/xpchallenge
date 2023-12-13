"use client"

import { useState } from "react"
import { Wheel } from "react-custom-roulette"
import { wheelsData, spinInfo, spinTotalTime } from "@/config/data"

export default function Wheels() {
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)
  const [spinResult, setSpinResult] = useState("")
  const spinTimes = spinTotalTime()

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

  const handleSpinClick = async () => {
    if (!mustSpin) {
      fetch(process.env.NEXT_PUBLIC_SERVER_URL || "", { method: "GET" })
        .then((res) => res.json())
        .then(async (re) => {
          setPrizeNumber(re.data)
          setMustSpin(true)
          await sleep(spinTimes)
          setSpinResult(wheelsData[re.data].option)
        })
    }
  }

  return (
    <div className="relative">
      <div className="-rotate-45">
        <Wheel
          {...spinInfo}
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={wheelsData}
          onStopSpinning={() => {
            setMustSpin(false)
          }}
        />
      </div>
      <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center">
        <button onClick={handleSpinClick} className="">
          SPIN
        </button>
      </div>
      <div className="text-4xl text-white text-center absolute left-1/2 -translate-x-1/2 -bottom-10">
        {spinResult}
      </div>
    </div>
  )
}
