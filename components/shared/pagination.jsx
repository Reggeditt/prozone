"use client";

import Image from "next/image";
import React, { useReducer } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

const PaginationComponent = ({ itemsArray, itemsPerPage }) => {
  const totalItems = itemsArray.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const initialState = {
    currentPage: 1,
    totalPages: totalPages,
    pageItems: [...itemsArray.slice(0, itemsPerPage)],
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "NEXT_PAGE": {
        if (state.currentPage + 1 > totalPages) return initialState;
        const nextPage = Math.min(state.currentPage + 1, totalPages);
        const nextPageItems = itemsArray.slice(
          (nextPage - 1) * itemsPerPage,
          nextPage * itemsPerPage
        );
        return { ...state, currentPage: nextPage, pageItems: nextPageItems };
      }
      case "PREVIOUS_PAGE": {
        const prevPage = Math.max(state.currentPage - 1, 1);
        const prevPageItems = itemsArray.slice(
          (prevPage - 1) * itemsPerPage,
          prevPage * itemsPerPage
        );
        return { ...state, currentPage: prevPage, pageItems: prevPageItems };
      }
      case "SET_PAGE_ITEMS":
        return { ...state, pageItems: action.payload };
      case "RESET_PAGINATION":
        return initialState;
      default:
        return state;
    }
  }, initialState);

  const handleNext = () => {
    dispatch({ type: "NEXT_PAGE" });
  };

  const handlePrevious = () => {
    dispatch({ type: "PREVIOUS_PAGE" });
  };

  return (
    <Pagination className="w-full flex flex-col gap-2 items-center">
      <PaginationContent>
        {state.pageItems.map((item, index) => (
          <PaginationItem key={index} className="pagination-item">
            <Image
              src={item}
              alt={`Icon ${index + 1}`}
              width={400}
              height={400}
            />
          </PaginationItem>
        ))}
      </PaginationContent>
      <div className="pagination-footer">
        <PaginationPrevious onClick={handlePrevious}>
          Previous
        </PaginationPrevious>
        <span>
          Page {state.currentPage} of {state.totalPages}
        </span>
        <PaginationNext onClick={handleNext}>Next</PaginationNext>
      </div>
    </Pagination>
  );
};

export default PaginationComponent;
