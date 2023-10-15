import { expect } from "vitest";
import Footer from "../components/Footer";
import { render } from "@testing-library/react";

describe("Footer component", () => {
  it("should render the Footer component correctly", () => {
    render(<Footer />);

    const copyrightText = document.querySelector(".footer p");

    expect(copyrightText).not.toBeNull();

    expect(copyrightText.textContent).toContain("Copyright © Basrunki Siburian - 120140007 - Tugas Individu 3");
  });

  it("should include 'Pemrograman Web Lanjut'", () => {
    render(<Footer />);

    const textWithPemrogramanWebLanjut = document.querySelector(".flex.space-x-4 p");

    expect(textWithPemrogramanWebLanjut).not.toBeNull();
    expect(textWithPemrogramanWebLanjut.textContent).toContain("Pemrograman Web Lanjut");
  });
});
