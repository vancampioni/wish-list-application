import {
  render,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Search from "../Search";

const renderComponent = () => {
  const search = "Camiseta";
  const setSearch = jest.fn();
  render(
    <BrowserRouter>
      <Search search={search} setSearch={setSearch} />
    </BrowserRouter>
  );
};

describe("Search Component", () => {
  it("should render the search bar component", () => {

    renderComponent()

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
