import React, { useEffect } from "react";
import { IDeviceContext } from "../../typescript/interfaces";
import { TScreens } from "../../typescript/types";
import { devices } from "../../utils/constants";
import DeviceContext from "./deviceContext";

type TDefaultState = Omit<IDeviceContext, "setDevice">;

const defalutstate: TDefaultState = {
    device: null,
    screenSize: null,
};

const SET_DEVICE = "SET_DEVICE";
const SET_SCREEN_SIZE = "SET_SCREEN_SIZE";

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
        case SET_SCREEN_SIZE:
            return {
                ...state,
                screenSize: action.payload,
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
        dispatch({ type: SET_SCREEN_SIZE, payload: innerWidth });
        const screens: string[] = Object.keys(devices);

        for (let i = 0; i < screens.length; i++) {
            const screen = screens[i];
            const screenValue = devices[screen as TScreens];
            if (innerWidth > devices["2xl"]) {
                setDevice("2xl");
                break;
            }

            if (innerWidth <= screenValue) {
                setDevice(screen as TScreens);
                break;
            }
        }
    };

    useEffect(() => {
        if (window) {
            window.addEventListener("resize", handleWindowResize);
            const { innerWidth } = window;
            const screens: string[] = Object.keys(devices);
            dispatch({ type: SET_SCREEN_SIZE, payload: innerWidth });

            for (let i = 0; i < screens.length; i++) {
                const screen = screens[i];
                const screenValue = devices[screen as TScreens];

                if (innerWidth > devices["2xl"]) {
                    setDevice("2xl");
                    break;
                }

                if (innerWidth <= screenValue) {
                    setDevice(screen as TScreens);
                    break;
                }
            }

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
