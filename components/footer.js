import { ReactCusdis } from "react-cusdis";
export default function Footer() {
    return (
        <footer className="bg-gray-500">
            <div>
              <h2 className="my-25 py-15 text-white text-center ">COMMENTS</h2>
              <p className="py-25 text-center">
                Have a question or want to share something? Feel free to
                participate in the discussion
                <br />
                <br></br>
              </p>
              <ReactCusdis
                id="cusdis_thread"
                attrs={{
                  host: "https://cusdis.com",
                  appId: "5250856f-8513-4b8f-9fe3-759f5bcf54fc",
                  pageId: "nce-cal",
                  pageTitle: "Real Cost of No cost EMI",
                  pageUrl: "http://localhost:3000/",
                  theme: "dark",
                }}
              />
            </div>
            <div className="container mx-auto justify-center">
                <div className="py-5">
                    <h1 className="text-4xl text-center text-black font-bold">Footer here</h1>
                    <p className="text-4xl text-black">Subscribe to newsletter input field?</p>
                    <p>Created by + social handles</p>
                </div>
            </div>
        </footer>
    )
}