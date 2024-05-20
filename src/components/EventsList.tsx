import EventCard from "./EventCard";
import { getEvents } from "@/lib/utils";
import PageinationControls from "./PageinationControls";

type EventsListProps = {
  city: string;
  page?: number
}


export default async function EventsList({ city, page = 1 }: EventsListProps) {
  const {data, totalCount} = await getEvents(city, page)

  const previousPath = page > 1 ? `/events/${city}?page=${page-1}` : ''
  const nextPath = totalCount > 6 * page ? `/events/${city}?page=${page+1}` : ''

  return (
    <section className="max-w-[1100px] px-[20px] flex flex-wrap gap-10 justify-center">
    {
        data.map((event) => (
          <EventCard key={event.id} event={event} />
        ))
      }
      <PageinationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  )
}
