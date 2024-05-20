"use client"

import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"


export default function SearchForm() {
    const [ searchText, setSearchText ] = useState("")
    const router = useRouter()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!searchText) return

        router.push(`/events/${searchText}`)
      }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
        <input value={searchText} onChange={handleChange} className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent focus:ring-2 focus:bg-white/10 transition" type="text" placeholder="Search events in any city..." spellCheck={false} />
    </form>
  )
}
