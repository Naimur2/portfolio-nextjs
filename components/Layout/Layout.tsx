import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    const navRef = React.useRef<HTMLDivElement>(null);
    const bodyRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const nav = navRef.current;
        const body = bodyRef.current;
        if (nav && body) {
            body.style.paddingTop = `${nav.clientHeight}px`;
        }
    }, []);

    return (
        <>
            <Navbar ref={navRef} />
            <main ref={bodyRef}>{children}</main>
            <Footer />
        </>
    );
}
