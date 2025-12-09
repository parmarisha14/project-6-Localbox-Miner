import React from 'react'
import "./Page.css";
const Page = ({employee,handleSubmit,handleChange}) => {
  return (
    
      <div className="container my-5 d-flex justify-content-center">
      <div className="card shadow-lg custom-card">

        <h3 className="text-center mb-4 fw-bold title-text">
          Add Employee Data
        </h3>

        <form onSubmit={handleSubmit} className="w-75 mx-auto">
          
          <div className="mb-3">
            <label className="form-label fw-semibold">Employee Name</label>
            <input
              type="text"
              className="form-control custom-input"
              name="ename"
              onChange={handleChange}
              value={employee.ename || ""}
              placeholder="Enter employee name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              className="form-control custom-input"
              name="email"
              onChange={handleChange}
              value={employee.email || ""}
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Department</label>
            <input
              type="text"
              className="form-control custom-input"
              name="department"
              onChange={handleChange}
              value={employee.department || ""}
              placeholder="Enter department"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Salary</label>
            <input
              type="number"
              className="form-control custom-input"
              name="salary"
              onChange={handleChange}
              value={employee.salary || ""}
              
              placeholder="Enter salary"
            />
          </div>

          <button
            type="submit"
            className="btn custom-btn w-100 btn-lg mt-3 rounded-pill"
          >
            Submit
          </button>

        </form>

      </div>
    </div>
   
  )
}

export default Page
