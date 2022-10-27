import Image from "next/image";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import SocialIcon from "./Socialicon/SocialIcon";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-primary-100 px-4 py-5 grid gap-3">
            <div className="flex items-center justify-center">
                <Image
                    alt="footer-image"
                    src={"/images/footer-image-no-bg.png"}
                    width={60}
                    height={60}
                    className="bg-slate-400"
                />
            </div>
            <div className="grid  justify-items-center">
                <p className="text-xl font-medium text-white">Naimur Rahaman</p>
                <p className="text-sm text-white">Full Stack developer</p>
            </div>
            <div className="flex space-x-2  items-center justify-center">
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
            <div className="flex space-x-2  items-center justify-center mt-4">
                <p className="text-xs text-white">
                    @naimur_rahaman || All right reserved || {currentYear}
                </p>
            </div>
        </footer>
    );
}
