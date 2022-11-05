import React from "react";
import { TScreens } from "../typescript/types";

import useMediaQuery from "./useMediaQuery";

export default function useCurrentDeviceWidth(): TScreens | undefined {
    const [currentDevice, setCurrentDevice] = React.useState<
        TScreens | undefined
    >();
    const smallDevice = useMediaQuery(screens.sm);
    const mediumDevice = useMediaQuery(screens.md);
    const largeDevice = useMediaQuery(screens.lg);
    const extraLargeDevice = useMediaQuery(screens.xl);
    const twoXLargeDevice = useMediaQuery(screens["2xl"]);

    React.useEffect(() => {
        switch (true) {
            case twoXLargeDevice:
                setCurrentDevice("2xl");
                break;
            case extraLargeDevice:
                setCurrentDevice("xl");
                break;
            case largeDevice:
                setCurrentDevice("lg");
                break;
            case mediumDevice:
                setCurrentDevice("md");
                break;
            case smallDevice:
                setCurrentDevice("sm");
                break;
            default:
                setCurrentDevice(undefined);
        }
    }, [
        largeDevice,
        mediumDevice,
        smallDevice,
        extraLargeDevice,
        twoXLargeDevice,
    ]);
    console.log({ currentDevice });

    return currentDevice;
}
