import { expect } from "vitest";
import Contact from "../components/Contact"; 
import { render, fireEvent } from "@testing-library/react";

describe("Contact component", () => {
  it("should render the Contact component correctly", () => {
    render(<Contact />);
    const contactTitle = document.querySelector(".text-5xl");
    expect(contactTitle).not.toBeNull();
    expect(contactTitle.textContent).toContain("Hubungi Kami");
  });

  it("should submit the form", () => {
    render(<Contact />);

    fireEvent.input(document.querySelector("input[name='name']"), {
      target: { value: "John Doe" },
    });
    fireEvent.input(document.querySelector("input[name='email']"), {
      target: { value: "johndoe@example.com" },
    });
    fireEvent.input(document.querySelector("textarea[name='message']"), {
      target: { value: "This is a test message." },
    });
    fireEvent.click(document.querySelector("button[type='submit']"));

  });
});
