import { useEffect } from "react";
import { IDeviceContext } from "../../typescript/interfaces";
import { TScreens } from "../../typescript/types";
import { devices } from "../../utils/constants";
import DeviceContext from "./deviceContext";
import React from "react";

type TDefaultState = Omit<IDeviceContext, "setDevice">;

const defalutstate: TDefaultState = {
    device: null,
};

const SET_DEVICE = "SET_DEVICE";

const reducer = (
    state: TDefaultState,
    action: { type: string; payload: any }
) => {
    switch (action.type) {
        case SET_DEVICE:
            return {
                ...state,
                device: action.payload,
            };
        default:
            return state;
    }
};

const DeviceProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = React.useReducer(reducer, defalutstate);

    const setDevice = (device: TScreens | null) => {
        dispatch({ type: SET_DEVICE, payload: device });
    };

    const handleWindowResize = (e: Event) => {
        const { innerWidth } = e.target as Window;
        Object.keys(devices).forEach((device) => {
            const currentDevice = devices[device];
            if (innerWidth < currentDevice) {
                setDevice(device as TScreens);
            }
        });
    };

    useEffect(() => {
        if (window) {
            window.addEventListener("resize", handleWindowResize);
            const { innerWidth } = window;
            Object.keys(devices).forEach((device) => {
                if (innerWidth < devices[device]) {
                    setDevice(device as TScreens);
                }
            });

            return () => {
                window.removeEventListener("resize", handleWindowResize);
            };
        }
    }, []);

    return (
        <DeviceContext.Provider value={{ ...state, setDevice }}>
            {children}
        </DeviceContext.Provider>
    );
};

export default DeviceProvider;
