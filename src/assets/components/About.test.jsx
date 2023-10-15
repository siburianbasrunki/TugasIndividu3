import { expect } from "vitest";
import About from "../components/About";
import Footer from "../components/Footer";
import { render } from "@testing-library/react";

describe("Components", () => {
  it("should render the About component correctly", () => {
    render(<About />);

    const aboutTitle = document.querySelector(".text-5xl");

    expect(aboutTitle).not.toBeNull();
    expect(aboutTitle.textContent).toContain("Tentang List Film");
  });

  it("should render the Footer component correctly", () => {
    render(<Footer />);

    const copyrightText = document.querySelector(".footer p");

    expect(copyrightText).not.toBeNull();
    expect(copyrightText.textContent).toContain("Copyright © Basrunki Siburian - 120140007 - Tugas Individu 3");

    const pemrogramanWebText = document.querySelector(".flex.space-x-4 p");

    expect(pemrogramanWebText).not.toBeNull();
    expect(pemrogramanWebText.textContent).toContain("Pemrograman Web Lanjut");
  });
});
