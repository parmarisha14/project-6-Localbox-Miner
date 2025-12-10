import React from "react";
import "./ViewData.css";

const Page = ({
  list,
  handleDelete,
  handleEdit,
  currentItems,
  currentPage,
  totalPage,
  setCurrentPage
}) => {
  return (
    <div className="view-container">
      <h2 className="table-title">Employee List</h2>

      <div className="table-card">
        <table className="custom-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {list.length === 0 ? (
              <tr>
                <td colSpan="6" className="no-data">
                  No Data Found
                </td>
              </tr>
            ) : (
              currentItems.map((emp, index) => (
                <tr key={emp.id}>
                  <td>{index + 1 + (currentPage - 1) * 4}</td>
                  <td>{emp.ename}</td>
                  <td>{emp.email}</td>
                  <td>{emp.department}</td>
                  <td>{emp.salary}</td>

                  <td>
                    <button
                      className="btn-edit"
                      onClick={() => handleEdit(emp.id)}
                    >
                      Edit
                    </button>{" "}
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(emp.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <ul className="pagination justify-content-center">

        {/* Prev Button */}
        {currentPage > 1 && (
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Prev
            </button>
          </li>
        )}

        {/* Page Numbers */}
        {[...Array(totalPage)].map((_, index) => (
          <li
            key={index}
            className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
          >
            <button
              className="page-link"
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}

        {/* Next Button */}
        {currentPage < totalPage && (
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </li>
        )}

      </ul>
    </div>
  );
};

export default Page;
