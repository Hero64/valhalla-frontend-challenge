import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import usePaginatedData from ".";

const items = Array(50)
  .fill(0)
  .map((_, index) => index);

it("Should return first 20 data with other data", () => {
  const { result } = renderHook(() => usePaginatedData(items));
  expect(result.current.data).toHaveLength(20);
  expect(result.current.page).toBe(1);
  expect(result.current.total).toBe(items.length);
});

it("Should set page and values", () => {
  const { result, rerender } = renderHook(() => usePaginatedData(items));
  act(() => {
    result.current.setPage(3);
  });
  rerender();
  expect(result.current.page).toBe(3);
  expect(result.current.data.length).toBe(10);
});
