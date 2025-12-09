import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Page";
import ViewData from "./components/About/Page";
import Header from './components/Header';

const App = () => {

  const [employee, setEmployee] = useState({});
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [mount, setMount] = useState(false);

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("list")) || [];
    setList(data);
    setMount(true);
  }, []);

  useEffect(() => {
    if (mount) {
      localStorage.setItem("list", JSON.stringify(list));
    }
  }, [list, mount]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId !== null) {
      const updated = list.map((item) =>
        item.id === editId ? { ...item, ...employee } : item
      );
      setList(updated);
      setEditId(null);
    } else {
      setList([...list, { id: Date.now(), ...employee }]);
    }

    setEmployee({});
  };

  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    const data = list.find((item) => item.id === id);
    setEmployee(data);
    setEditId(id);
  };

  const filteredList = list.filter((item) => {
    const s = search.toLowerCase();

    if (item.ename?.toLowerCase().includes(s)) return item;
    if (item.department?.toLowerCase().includes(s)) return item;

    return false;
  });

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentData = filteredList.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredList.length / itemsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header search={search} setSearch={setSearch} />

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
            list={currentData}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
            indexOfFirst={indexOfFirst}
          />
        } />
      </Routes>
    </>
  );
};

export default App;
