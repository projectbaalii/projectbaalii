import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
    return (
        <header className="border-b border-gray-800 bg-secondary">
            <div className="container px-4 py-4">
                <div className="flex items-center justify-between">
                    <Logo />
                    <Navigation />
                </div>
            </div>
        </header>
    )
}


export default Header;