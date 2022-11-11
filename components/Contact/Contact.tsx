import SectionHeader from "../common/SectionHeader/SectionHeader";
import ContactButton from "./ContactButton/ContactButton";
import MessageButton from "./MessageButton/MessageButton";

export default function Contact() {
    return (
        <section className="" id="contact">
            <div className="px-4 py-20 grid gap-7 container lg:grid-cols-2 lg:gap-10 lg:py-24">
                <div className="grid gap-7 lg:col-start-2 lg:gap-8">
                    <SectionHeader
                        title="Try a better way to contact with me to solve your desire
                            tasks"
                        titleClassName="max-w-[30ch]"
                    />
                    <button
                        className="border-1 border-black w-full p-3 font-medium text-xs 
                    lg:text-xl"
                    >
                        Send message through Email
                    </button>
                    <div className="flex flex-row  justify-center items-center space-x-4 lg:space-x-6">
                        <div className="bg-gray-300 h-[1px] inline w-3/5" />
                        <span className="uppercase text-gray-600 font-medium text-xs lg:text-xl">
                            Or
                        </span>
                        <div className="bg-gray-300 h-[1px] inline w-3/5" />
                    </div>
                    <div className="flex space-x-3 lg:space-x-4">
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
                <div className="flex flex-col justify-center  space-y-5 lg:col-start-1 lg:row-start-1">
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
            </div>
        </section>
    );
}
