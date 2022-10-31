import React from "react";
import Image from "next/image";
import MessageButton from "./MessageButton/MessageButton";
import ContactButton from "./ContactButton/ContactButton";
import SectionHeader from "../common/SectionHeader/SectionHeader";

export default function Contact() {
    return (
        <section className="px-4 py-10 grid gap-7">
            <div className="grid gap-5">
                <SectionHeader
                    title="Try a better way to contact with me to solve your desire
                        tasks"
                />
                {/* <header>
                    <h4 className="text-[1.31rem] md:text-h3 text-center">
                        Try a better way to contact with me to solve your desire
                        tasks
                    </h4>
                </header> */}
                <button className="border-1 border-black w-full p-2 font-medium text-xs">
                    Send message through Email
                </button>
                <div className="flex flex-row  justify-center items-center space-x-4">
                    <div className="bg-gray-300 h-[1px] inline w-3/5" />
                    <span className="uppercase text-gray-600 font-medium text-xs">
                        Or
                    </span>
                    <div className="bg-gray-300 h-[1px] inline w-3/5" />
                </div>
                <div className="flex space-x-3">
                    <MessageButton
                        text="Facebook"
                        icon="/svg/facebook.svg"
                        alt="messanger"
                    />
                    <MessageButton
                        text="Whatsapp"
                        icon="/svg/whatsapp.svg"
                        alt="whatsapp"
                    />
                </div>
            </div>
            <div className="grid gap-4">
                <ContactButton
                    icon="/svg/location.svg"
                    title="Address"
                    subtitle="Mrpur 10, Dhaka, Bangladesh"
                    alt="Address"
                />
                <ContactButton
                    icon="/svg/phone.svg"
                    title="Phone"
                    subtitle="+880-1840-307041"
                    alt="phone"
                />
                <ContactButton
                    icon="/svg/email.svg"
                    title="Email"
                    subtitle="naimurrahaman248@gmail.com"
                    alt="email"
                />
            </div>
        </section>
    );
}
