import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type PagControlsProps = {
    previousPath: string;
    nextPath: string;
}

const btnStyles = "text-white px-5 py-3 flex items-center gap-x-2 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm"

export default function PageinationControls({ previousPath, nextPath }: PagControlsProps) {
  return (
    <section className="flex justify-between w-full">
        {
            previousPath ? (
                <Link href={previousPath} className={btnStyles} ><ArrowLeftIcon /> Previous</Link>
            ) : <div/>
        }
        {
            nextPath && (
                <Link href={nextPath} className={btnStyles} >Next <ArrowRightIcon /></Link>
            ) 
        }

    </section>
  )
}
