import React from "react";
import DeviceContext from "../context/deviceContext/deviceContext";

type TCurrentDevice = [string | null, number | null];

export default function useCurrentDevice() {
    const deviceCtx = React.useContext(DeviceContext);

    return [deviceCtx.device, deviceCtx.screenSize] as TCurrentDevice;
}
