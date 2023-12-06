import Hero from "./components/hero/Hero.tsx"
import Header from "./components/header/Header.tsx"
import { useState } from "react";

export default function App() {
  const [isContactClicked, setIsContactClicked] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isCardSlided, setIsCardSlided] = useState(0);

    function OnCardClick() {
        if (isCardSlided === 0 || isCardSlided === 2) {
            setIsCardSlided(1);
        } else {
            setIsCardSlided(2);
        }
    }

    function OnContactClick() {
        if (isLoading === false) {
            setIsLoading(true);

            if (isContactClicked === 0 || isContactClicked === 2) {
                setIsContactClicked(1);
            } else {
                setIsContactClicked(2);
            }

            setTimeout(() => {setIsLoading(false);}, 1700)
        }
    }

    return (
        <div className="h-screen w-screen grid grid-rows-9">
            <Header
                OnCardClick={OnCardClick}
                OnContactClick={OnContactClick}
            />
            <Hero
                isCardSlided={isCardSlided}
                OnCardClick={OnCardClick}
                isContactClicked={isContactClicked}
                setIsContactClicked={setIsContactClicked}
                OnContactClick={OnContactClick}
            />
        </div>
    )
}
