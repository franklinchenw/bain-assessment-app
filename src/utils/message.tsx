import React from "react";
import { toast, ToastOptions } from "react-toastify";
import "@/styles/toast.css";

const defaultConfig: ToastOptions = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  theme: "light",
};

interface ShowMessageProps {
  title: string;
  content: string;
  duration?: number;
}

const showMessage = (type: "error", props: ShowMessageProps) => {
  const { title, content, duration } = props;

  const config: ToastOptions = {
    ...defaultConfig,
    autoClose: duration ? duration * 1000 : defaultConfig.autoClose,
  };

  switch (type) {
    case "error":
      return toast.error(
        <div className="toast-container">
          <div>
            <div className="toast-title">{title}</div>
            <div className="toast-content">{content}</div>
          </div>
        </div>,
        config
      );
    // TODO: Add other types of messages
    default:
      return null;
  }
};

export const showError = (props: ShowMessageProps) => showMessage("error", props);
