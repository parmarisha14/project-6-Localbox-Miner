import React from "react";
import "./ViewData.css";

const Page = ({
  list,
  handleDelete,
  handleEdit,
  currentPage,
  totalPages,
  handlePageChange,
  indexOfFirst,
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
              list.map((emp, index) => (
                <tr key={emp.id}>
                  <td>{indexOfFirst + index + 1}</td>
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

      <div className="pagination">
        <button
          className="page-btn"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={
              currentPage === i + 1 ? "active-page page-btn" : "page-btn"
            }
          >
            {i + 1}
          </button>
        ))}

        <button
          className="page-btn"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page;
