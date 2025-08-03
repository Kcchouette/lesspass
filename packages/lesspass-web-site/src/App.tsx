import "./App.css";
import { LessPassWebComponent } from "lesspass-web-component";

export function Hero() {
  return (

          <div className="mt-16 flex flex-col items-center sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
            <div
              className="mx-auto max-w-full overflow-y-scroll rounded-md border border-gray-800 bg-white dark:bg-zinc-950"
              style={{ width: "481px", minHeight: "500px" }}
            >
              <LessPassWebComponent />
      </div>
    </div>
  );
}

export function HowDoesItWork() {
  return (<div></div>
  );
}

export function OpenSource() {
  return (
    <div></div>
  );
}

export function Stats() {

  return (
   <div></div>
  );
}

export function UseItEveryWhere() {
  return (
    <div></div>
  );
}

export function LastArticles() {
  
  return (
    <div></div>
  );
}
export default function HomePage() {
  return (
    <>
      <Hero />
    </>
  );
}
