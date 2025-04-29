import React, { useEffect } from 'react'
import { usePaginationStore } from '../store/transaction/paginationStore';
//import { data } from '../constants/data'

const mockData = Array.from({ length: 42 }, (_, i) => `Item ${i + 1}`);

const Transactions = () => {

  const {
    currentPage,
    itemsPerPage,
    totalItems,
    setTotalItems,
    setCurrentPage,
    nextPage,
    prevPage,
  } = usePaginationStore();

  useEffect(() => {
    setTotalItems(mockData.length);
  }, [setTotalItems]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = mockData.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <>
    {/*<div className="page-title">
      <h1>Transactions</h1>
    </div> */}

    <div className="max-w-md mx-auto p-4">
      <ul className="mb-4">
        {currentItems.map((item) => (
          <li key={item} className="border p-2 rounded mb-2">
            {item}
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>

        <div>
          Page {currentPage} of {totalPages}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
    </>
  )
}

export default Transactions