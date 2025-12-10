import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Page";
import ViewData from "./components/About/Page";
import Header from './components/Header';

const App = () => {

  const [employee, setEmployee] = useState({});
  const [list, setList] = useState([]);
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [mount, setMount] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("list")) || [];
    setList(stored);
    setData(stored);       
    setMount(true);
  }, []);

  useEffect(() => {
    if (mount) {
      localStorage.setItem("list", JSON.stringify(list));
      setData(list);       
    }
  }, [list, mount]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!editId) {
      let newList = [...list, { ...employee, id: Date.now() }];
      setList(newList);
    } else {
      let updateList = list.map(value =>
        value.id === editId ? { ...value, ...employee } : value
      );
      setList(updateList);
      setEditId(null);
    }

    setEmployee({});
  };

  const handleDelete = (id) => {
    const updated = list.filter((item) => item.id !== id);
    setList(updated);
  };

  const handleEdit = (id) => {
    const item = list.find((x) => x.id === id);
    setEmployee(item);
    setEditId(id);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();

    let newData = list.filter(item =>
      item.ename.toLowerCase().includes(value) ||
      item.department.toLowerCase().includes(value)
    );

    setData(newData.length ? newData : list);
  };

 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPage = Math.ceil(data.length / itemsPerPage);

  return (
    <>
      <Header handleSearch={handleSearch} />

      <Routes>
        <Route index element={
          <Home
            employee={employee}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        } />

        <Route path="/viewdata" element={
          <ViewData
            list={list}
            currentItems={currentItems}
              currentPage={currentPage}
              totalPage={totalPage}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              setCurrentPage={setCurrentPage}
          />
        } />
      </Routes>
    </>
  );
};

export default App;
