import './App.css';
import {useEffect, useState} from 'react';
import {SubscriptionPage} from "@/components/subscription-page.tsx";
import {useLocation} from "react-router-dom";
import {SkeletonCard} from "@/components/load-skeleton.tsx";

function App() {
    const location = useLocation();
    const [isRedirecting, setIsRedirecting] = useState(true);

    useEffect(() => {

        const urlParams = new URLSearchParams(location.search);
        const email = urlParams.get("email");
        if (!email) {
            const redirectUrl = import.meta.env.VITE_REDIRECT_URL;
            if (redirectUrl) { window.location.href = redirectUrl; }

            {/* Skeleton for the heading */}
        } else { setIsRedirecting(false); }
    }, [location]);

    if (isRedirecting) {
        return (
            <div className="flex justify-center items-center h-screen">
                <SkeletonCard />
            </div>
        );
    }

    return (
        <>
            <div>
                <SubscriptionPage />
            </div>
        </>
    );
}

export default App;
