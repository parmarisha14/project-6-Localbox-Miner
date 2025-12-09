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

    if (!editId) {
      let newList = [...list, { ...employee, id: Date.now() }];
      setList(newList);
      setEmployee({});
    } else {
      let updateList = list.map(value => {
        if (value.id === editId) {
          return { ...value, ...employee };
        }
        return value;
      });

      setList(updateList);
      setEmployee({});
      setEditId(null);
    }
  };

  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    const data = list.find((item) => item.id === id);
    setEmployee(data);
    setEditId(id);
  };

  const handleSearch = (e) => {
  const value = e.target.value;
  setSearch(value);

  const allData = JSON.parse(localStorage.getItem("list")) || [];

  
  if (value === "") {
    setList(allData);
    return;
  }

  const newData = allData.filter((item) => {
    return (
      item.ename.toLowerCase().includes(value.toLowerCase()) ||
      item.department.toLowerCase().includes(value.toLowerCase())
    );
  });

  setList(newData);
};


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
  const totalPage = Math.ceil(list.length / itemsPerPage);

  return (
    <>
      <Header search={search} setSearch={handleSearch} />

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
            list={currentItems}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            currentPage={currentPage}
            totalPage={totalPage}
            indexOfFirst={indexOfFirstItem}
          />
        } />
      </Routes>
    </>
  );
};

export default App;
