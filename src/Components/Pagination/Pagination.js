import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./Pagination.scss";

export default function pagination({ count = 10, page = 1, setPage }) {
  return (
    <Stack spacing={2}>
      <Pagination
        onChange={(e, v) => setPage(v)}
        count={count}
        page={page}
        shape="rounded"
        hideNextButton
        hidePrevButton
        boundaryCount={2}
      />
    </Stack>
  );
}
