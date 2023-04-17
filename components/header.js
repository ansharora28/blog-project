import Link from 'next/link'
export default function HomHeader() {
    return (
        <header className="bg-black-100">
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                
                <div className="shrink w-40 sm:order-2 ">
                    <Link className='font-bold text-3xl' href={"/"}>
                         MY BLOG
                    </Link>
                </div>
            </div>
        </header>
    )
}