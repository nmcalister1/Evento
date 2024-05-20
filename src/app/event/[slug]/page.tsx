import H1 from "@/components/H1"
import { getEvent } from "@/lib/utils"
import { Metadata } from "next"
import Image from "next/image"
import React from "react"

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata>{
    const slug = params.slug
    const data = await getEvent(slug)

    return {
      title: data.name
    }
}

export default async function EventPage({ params }: Props) {
    const slug = params.slug
    const data = await getEvent(slug)

  return (
    <main>
      <section className="relative overflow-hidden flex 
      justify-center items-center py-14 md:py-20">
        <Image className="object-cover blur-3xl z-0" 
        src={data.imageUrl} quality={50} 
        alt="Event background image" fill 
        sizes="(max-width: 1280px) 100vw, 1280px" />

        <div className="z-1 flex flex-col lg:flex-row gap-6 lg:gap-x-16 relative">
          <Image src={data.imageUrl} alt={data.name} width={300} height={201}
            className="rounded-xl border-2 border-white/50 object-cover" />

          <div className="flex flex-col">
            <p className="text-white/75">
              {
                new Date(data.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })
              }
            </p>
            <H1 className="mb-2, mt-1 whitespace-nowrap lg:text-5xl">{data.name}</H1>
            <p className="whitespace-nowrap text-xl text-white/75">Organized by <span className="italic">{data.organizerName}</span></p>
            
            <button className="bg-white/20 text-lg capitalize mt-5 lg:mt-auto 
              w-[95vw] sm:w-full py-2 bg-blur rounded-md border-white/10 
              border-2 state-effects">Get Tickets</button>
        </div>
        </div>

        
      </section>

      <div className="text-center px-5 py-16 min-h-[75vh]">
          <Section>
              <SectionHeading>About this event</SectionHeading>
              <SectionContent>{data.description}</SectionContent>
          </Section>

          <Section>
              <SectionHeading>Location</SectionHeading>
              <SectionContent>{data.location}</SectionContent>
          </Section>
      </div>
    </main>
  )
}

type SectionProps = {
  children: React.ReactNode;
}

function Section({ children }: SectionProps){
  return <section className="mb-12">{children}</section>
}

function SectionHeading({ children }: SectionProps) {
  return <h2 className="text-2xl mb-8">{children}</h2>
}

function SectionContent({ children }: SectionProps) {
   return <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">{children}</p>
}
