import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="/">
      <PageHeader
        title="😞 Pessimistic Loogies"
        subTitle="A generative SVG collection for haters."
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
