import AlertConfirm from "component/common/molecules/AlertConfirm";

import React from "react";
import ReactDOM from "react-dom";

export function usePopup() {
  //
  const show = (options) => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    // body scroll
    document.body.style.overflow = "hidden";

    return new Promise((resolve) => {
      const cleanup = () => {
        ReactDOM.unmountComponentAtNode(container);
        if (container.parentNode) {
          document.body.removeChild(container);
        }

        // body scroll rollback
        document.body.style.overflow = "auto";
      };

      const confirmHandler = () => {
        options.onConfirm?.();
        resolve("confirmed");
        cleanup();
      };

      const cancelHandler = () => {
        options.onCancel?.();
        resolve("canceled");
        cleanup();
      };

      ReactDOM.render(
        <AlertConfirm
          {...options}
          onConfirm={confirmHandler}
          onCancel={cancelHandler}
        />,
        container
      );
    });
  };

  return { show };
}
