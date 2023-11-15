import Hero from "../hero/Hero.tsx"
import Header from "../header/Header.tsx"

export default function Home() {
    return (
        <div className="h-screen w-screen grid grid-rows-9">
            <Header />
            <Hero />
        </div>
    )
}