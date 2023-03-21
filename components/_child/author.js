import Image from "next/image"
import Link from "next/link"

export default function author() {
    return (
        <div className="author flex py-5">
            <Image src={"/images/author1.jpg"} width={40} height={40} className="rounded-full"></Image>
            <div className="flex flex-col justify-center px-4">
                <Link href={"/"} className="text-md font-bold text-white hover:text-gray-600">Ansh</Link>
                <span className="text-sm text-gray-500">CEO at nowhere</span>
            </div>
        </div>
    )
}