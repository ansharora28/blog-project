import { ReactCusdis } from "react-cusdis";
import PageWithComments from "./comment";
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
              <PageWithComments></PageWithComments>
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