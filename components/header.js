import Link from 'next/link'
export default function HomHeader() {
    return (
        <header className="bg-black-100">
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                    <input type="text" className="mt-1 block w-60 px-3 py-2 bg-black border border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="Search.." />
                </div>
                <div className="shrink w-60 sm:order-2 ">
                    <Link className='font-bold text-3xl' href={"/"}>
                        BLOOOOOG
                    </Link>
                </div>
            </div>
        </header>
    )
}