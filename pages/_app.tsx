import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import DeviceProvider from "../context/deviceContext/DeviceProvider";
import "../styles/globals.css";
import { ProjectProvider } from "../context/ProjectsContext/ProjectProvider";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ProjectProvider>
            <DeviceProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </DeviceProvider>
        </ProjectProvider>
    );
}

export default MyApp;
