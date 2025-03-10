import { Geist, Geist_Mono } from "next/font/google";
import { ConfigProvider } from "antd";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/toast.css';
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const theme = {
  components: {
    Radio: {
      colorPrimary: "black",
      colorBorder: "black",
    },
    Button: {
      colorPrimaryHover: "grey",
      colorTextDisabled: 'rgba(125, 125, 124, 1)',
      colorBgContainerDisabled: 'rgba(187, 187, 185, 1)',
      colorBorderDisabled: 'rgba(187, 187, 185, 1)',
    },
    Input: {
      hoverBorderColor: "black",
      activeBorderColor: "black",
      focusBorderColor: "black",
      boxShadow: "none",
      activeShadow: "none",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ConfigProvider theme={theme}>
          {children}
          <ToastContainer />
        </ConfigProvider>
      </body>
    </html>
  );
}
