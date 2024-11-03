import Image from "next/image";
import clsx from 'clsx';
import Header from "./_components/Header";
export default function Home() {
  return (
    <main>
        <Header />
        <h1>textbook</h1>
         <div className={clsx("text-green-500",{
            "text-red-400": true
         })}>
            allo
         </div>
    </main>
  );
}
