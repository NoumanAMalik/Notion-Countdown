"use client";

import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/navigation";
import { Switch, Dialog, Transition } from "@headlessui/react";

export default function Home() {
    const [route, setRoute] = useState("date--title--mode");
    const [enabled, setEnabled] = useState(true);
    const [isOpen, setIsOpen] = useState(false); // This is for the Modal
    const r = useRouter();

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    const updateRoute = (e: any) => {
        setRoute((oldRoute) => {
            let array = oldRoute.split("--");
            if (e.target.type == "date") {
                array[0] = e.target.value;
            } else if (e.target.type == "text") {
                array[1] = e.target.value;
            }

            let newRoute = array[0] + "--" + array[1] + "--" + array[2];
            console.log(newRoute);
            return newRoute;
        });
    };

    useEffect(() => {
        setRoute((oldRoute) => {
            let array = oldRoute.split("--");
            array[2] = enabled ? "dark" : "light";
            let newRoute = array[0] + "--" + array[1] + "--" + array[2];
            console.log(newRoute);
            return newRoute;
        });
    }, [enabled]);

    return (
        <>
            <h1 className="bg-[#131313] h-[10vh] text-[#DBDBDB] font-bold text-5xl py-4 px-8 underline">
                Notion Widget: Countdown
            </h1>
            <div className="flex flex-col h-[90vh] bg-[#131313] space-y-6 px-8 pt-8">
                <div>
                    <p className="underline font-bold text-[#DBDBDB] text-xl pb-2">
                        Enter the Date
                    </p>
                    <input
                        className="bg-[#DBDBDB] text-[#131313] rounded-lg w-48 h-8 px-2 text-xl"
                        type="date"
                        id="date"
                        onChange={updateRoute}
                    />
                </div>
                <div>
                    <p className="underline font-bold text-[#DBDBDB] text-xl pb-2">
                        Enter the Event Name
                    </p>
                    <input
                        className="bg-[#DBDBDB] text-[#131313] rounded-lg w-48 h-8 px-2 text-xl"
                        type="text"
                        id="occasion"
                        placeholder="Event Name Here..."
                        onChange={updateRoute}
                    />
                </div>
                <div>
                    <p className="underline font-bold text-[#DBDBDB] text-xl pb-2">
                        Toggle Dark Mode:{" "}
                    </p>
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${
                            enabled ? "bg-[#131313]" : "bg-[#DBDBDB]"
                        } 
                                    relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-white 
                                    transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white 
                                    focus-visible:ring-opacity-75`}
                    >
                        <span className="sr-only">Toggle Dark Mode</span>
                        <span
                            aria-hidden="true"
                            className={`${
                                enabled
                                    ? "translate-x-9 bg-[#DBDBDB]"
                                    : "translate-x-0 bg-[#131313]"
                            }
                                        pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg 
                                        ring-0 transition duration-200 ease-in-out`}
                        />
                    </Switch>
                </div>
                <button
                    type="button"
                    className="bg-[#DBDBDB] text-[#131313] rounded-lg w-48 h-8 px-2 font-bold cursor-pointer text-xl"
                    onClick={(e) => {
                        navigator.clipboard.writeText(
                            location.href + `/date/${route}`
                        );
                        openModal();
                    }}
                >
                    Submit Date
                </button>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="z-0" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            Widget Successful
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Your widget has been made
                                                successfully. The link has been
                                                copied to your clipboard. To add
                                                it to your Notion page, paste
                                                the link, then select the embed
                                                option.
                                            </p>
                                        </div>

                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Got it, thanks!
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </>
    );
}
