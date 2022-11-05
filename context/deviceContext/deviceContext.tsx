import React from "react";
import { IDeviceContext } from "../../typescript/interfaces";

const DeviceContext = React.createContext<IDeviceContext>({
    device: null,
    setDevice: () => {},
});

export default DeviceContext;
