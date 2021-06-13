import React from "react";
import { withKnobs, color, text, select } from "@storybook/addon-knobs";

import ButtonComponent from "./Button";

export default {
  title: "Design/UI Core",
  decorators: [withKnobs],
};

export const Button = () => {
  const bgColor = color("Background color", "#fff");
  const sizeOptions = ["sm", "md", "lg", "flex"];
  const btnColorOptions = ["primary", "primary-dark", "secondary", "secondary-dark", "secondary-dark-inverse", "secondary-borderless"];
  const btnColor = select("Color", btnColorOptions, "primary");
  const size = select("Size", sizeOptions, "md");
  const btnLabel = text("Label", "Button text");
  const btnUrl = text("Button redirect url", "");
  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      <ButtonComponent color={btnColor} href={btnUrl} size={size}>
        {btnLabel}
      </ButtonComponent>
    </div>
  );
};
