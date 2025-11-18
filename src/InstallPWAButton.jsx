import { useEffect, useState } from "react";

export default function InstallPWAButton() {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handler = (e) => {
            // Prevent the default mini-infobar
            e.preventDefault();
            setDeferredPrompt(e);
            setIsVisible(true);
        };

        window.addEventListener("beforeinstallprompt", handler);

        return () => {
            window.removeEventListener("beforeinstallprompt", handler);
        };
    }, []);

    const installApp = async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const choice = await deferredPrompt.userChoice;

        if (choice.outcome === "accepted") {
            console.log("PWA Installed");
        } else {
            console.log("PWA Install declined");
        }

        setDeferredPrompt(null);
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div>
            <p className="text-gray-600 text-center text-lg mb-8">
                Click the button below to install this app as a Progressive Web App (PWA).
            </p>
            <button
                onClick={installApp}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg mt-4"
            >
                Install App
            </button>
        </div>
    );
}
