import Image from "next/image";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import SocialIcon from "./Socialicon/SocialIcon";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-primary-100 lg:py-5">
            <div className="container px-4 py-5 grid gap-3 lg:grid-cols-[1fr,2fr,1fr]">
                <div className="flex flex-col space-y-3 lg:flex-row lg:space-x-5 lg:space-y-0 lg:col-start-1">
                    <div className="flex items-center justify-center">
                        <Image
                            alt="footer-image"
                            src={"/images/footer-image-no-bg.png"}
                            width={60}
                            height={60}
                            className="bg-slate-400"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-1 lg:items-start">
                        <p className="text-xl font-medium text-white">
                            Naimur Rahaman
                        </p>
                        <p className="text-sm text-white">
                            Full Stack developer
                        </p>
                    </div>
                </div>
                <div className="flex space-x-2  items-center justify-center lg:col-start-3">
                    <SocialIcon
                        icon={<FaGithub />}
                        href="https://github.com/naimur2/"
                    />
                    <SocialIcon
                        icon={<FaLinkedinIn />}
                        href="https://www.linkedin.com/in/naimurrahaman2/"
                    />
                    <SocialIcon
                        icon={<FaFacebookF />}
                        href="https://www.facebook.com/naimur248/"
                    />
                </div>
                <div className="flex space-x-2  items-center justify-center mt-4 lg:col-start-2 lg:row-start-1 lg:mt-0">
                    <p className="text-xs text-white text-center lg:text-lg">
                        @naimur_rahaman || All right reserved || {currentYear}
                    </p>
                </div>
            </div>
        </footer>
    );
}
