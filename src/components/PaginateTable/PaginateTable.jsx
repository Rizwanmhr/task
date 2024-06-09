import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PaginateTable = () => {
  const [allData, setAllData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 20;

  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setAllData(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = async (newPage) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setCurrentPage(newPage);
    setLoading(false);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = allData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(allData.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="px-12 py-4">
      <div className="overflow-hidden rounded-2xl border border-[#AEAEAE]">
        <div className="overflow-x-auto whitespace-nowrap">
          <table className="w-full">
            <thead>
              <tr className="bg-tableBg text-[#333]">
                <th className="px-6 py-4 text-left">Title</th>
                <th className="px-6 py-4 text-left">Body</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="2" className="text-center py-4">Loading...</td>
                </tr>
              ) : (
                currentData?.map((user) => (
                  <tr key={user.id} className="text-[#696969]">
                    <td className="px-6 py-4 w-[20%]">{user.title}</td>
                    <td className="px-6 py-4 w-[20%]">{user.body.slice(0, 50)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          className="text-white bg-primary border-[1px] border-success px-4 h-[50px] rounded-lg text-xl font-semibold"
          disabled={currentPage === 1 || loading}
        >
          Previous
        </button>
        <span className="text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          className="text-white bg-primary border-[1px] border-success px-4 h-[50px] rounded-lg text-xl font-semibold"
          disabled={currentPage === totalPages || loading}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginateTable;
