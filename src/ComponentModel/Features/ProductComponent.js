import React, { useEffect, useState } from "react";

const ProductComponent = ({ actions, productData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const [subsetSize] = useState(10); // Number of page numbers to display in each subset
  const [pageSubset, setPageSubset] = useState([]);

  useEffect(() => {
    actions.fetchProductsData();
  }, [actions]);

  useEffect(() => {
    generatePageSubset();
  }, [currentPage, productData]);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calculate total pages
  const totalPages = Math.ceil(productData.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Generate a subset of page numbers
  const generatePageSubset = () => {
    const currentSubsetIndex = Math.ceil(currentPage / subsetSize);
    const startPage = (currentSubsetIndex - 1) * subsetSize + 1;
    const endPage = Math.min(startPage + subsetSize - 1, totalPages);
    const subset = [];
    for (let i = startPage; i <= endPage; i++) {
      subset.push(i);
    }
    setPageSubset(subset);
  };
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div>
      {currentProducts.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
      {/* Pagination */}
      <ul className="pagination" style={{ listStyleType: "none" }}>
        <span>Pagination </span>
        <span style={{ cursor: "pointer" }} onClick={handlePrev}>
          &lt;
        </span>

        {pageSubset.map((pageNumber) => (
          <>
            <li
              style={{ display: "inline-block", margin: "0 2px" }}
              key={pageNumber}
              className="page-item"
            >
              <a
                style={{ textDecoration: "none" }}
                onClick={() => paginate(pageNumber)}
                href="#"
                className={`page-link ${
                  pageNumber === currentPage ? "active" : ""
                }`}
              >
                {pageNumber}
              </a>
            </li>
          </>
        ))}
        <span style={{ cursor: "pointer" }} onClick={handleNext}>
          &gt;
        </span>
      </ul>
    </div>
  );
};

export default ProductComponent;
