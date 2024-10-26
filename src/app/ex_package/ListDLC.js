"use client";
import React, { useState } from "react";
import { ListDLC_dataMock as dataMock } from "./Mock/ListDLC_data";
import { useRouter } from "next/navigation";

export default function ListDLC() {
  const [data, setData] = useState(dataMock);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [currentDealer, setCurrentDealer] = useState(null);
  const [newDealer, setNewDealer] = useState({
    name: "",
    code: "",
    address: "",
    sdt: "",
  });
  const [selectedDealers, setSelectedDealers] = useState([]);

  const router = useRouter();

  const filteredPosts = data.posts.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.number.includes(searchTerm) ||
      item.code.includes(searchTerm)
  );

  const handleAddDealerSubmit = (e) => {
    e.preventDefault();
    const maxNumber = data.posts.length
      ? Math.max(...data.posts.map((item) => parseInt(item.number, 10)))
      : 0;

    const newDealerData = {
      number: (maxNumber + 1).toString(),
      ...newDealer,
      goods: [],
    };

    setData((prevData) => ({
      posts: [...prevData.posts, newDealerData],
    }));

    setShowAddForm(false);
    setNewDealer({
      name: "",
      code: "",
      address: "",
      sdt: "",
    });
  };

  const handleEditClick = (dealer) => {
    setCurrentDealer(dealer);
    setNewDealer({
      name: dealer.name,
      code: dealer.code,
      address: dealer.address,
      sdt: dealer.sdt,
    });
    setShowEditForm(true);
  };

  const handleEditDealerSubmit = (e) => {
    e.preventDefault();
    setData((prevData) => ({
      posts: prevData.posts.map((item) =>
        item.number === currentDealer.number ? { ...currentDealer, ...newDealer } : item
      ),
    }));

    setShowEditForm(false);
    setCurrentDealer(null);
    setNewDealer({
      name: "",
      code: "",
      address: "",
      sdt: "",
    });
  };

  const handleDeleteClick = (dealerNumber) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa đại lý này không?")) {
      setData((prevData) => {
        const updatedPosts = prevData.posts
          .filter((item) => item.number !== dealerNumber)
          .map((item, index) => ({
            ...item,
            number: (index + 1).toString(),
          }));

        return { posts: updatedPosts };
      });
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowAddForm(false);
      setShowEditForm(false);
    }
  };

  const handleDealerSelect = (dealerNumber) => {
    const updatedSelection = selectedDealers.includes(dealerNumber)
      ? selectedDealers.filter((num) => num !== dealerNumber)
      : [...selectedDealers, dealerNumber];
  
    setSelectedDealers(updatedSelection);
  
    // Lưu vào localStorage
    const selectedDealersData = data.posts.filter(item => updatedSelection.includes(item.number));
    localStorage.setItem('selectedDealersData', JSON.stringify(selectedDealersData)); // Lưu toàn bộ thông tin đại lý đã chọn
  };
  

  const handleExportGoods = () => {
    if (selectedDealers.length === 0) {
      alert("Vui lòng chọn ít nhất một đại lý để xuất hàng.");
      return;
    }
    // Chuyển hướng đến form xuất hàng ở đây
    router.push("/ex_package/Summary");
  };

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Tìm kiếm đại lý..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>

      <div className="mb-4 flex justify-center items-center space-x-4">
        <button
          onClick={() => setShowAddForm(true)}
          className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-lg w-[25%]"
        >
          Thêm đại lý
        </button>
        <button
          onClick={handleExportGoods}
          className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-lg w-[25%]"
        >
          Xuất hàng cho đại lý
        </button>
      </div>

      {showAddForm && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
          onClick={handleOverlayClick}
        >
          <form
            onSubmit={handleAddDealerSubmit}
            className="bg-white p-6 rounded shadow-md w-[90%] max-w-md"
          >
            <h2 className="text-2xl font-bold mb-4">Thêm đại lý mới</h2>
            <div>
              <label className="block mb-1">Tên đại lý:</label>
              <input
                type="text"
                value={newDealer.name}
                onChange={(e) =>
                  setNewDealer({ ...newDealer, name: e.target.value })
                }
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Mã đại lý:</label>
              <input
                type="text"
                value={newDealer.code}
                onChange={(e) =>
                  setNewDealer({ ...newDealer, code: e.target.value })
                }
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Địa chỉ:</label>
              <input
                type="text"
                value={newDealer.address}
                onChange={(e) =>
                  setNewDealer({ ...newDealer, address: e.target.value })
                }
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Số điện thoại:</label>
              <input
                type="text"
                value={newDealer.sdt}
                onChange={(e) =>
                  setNewDealer({ ...newDealer, sdt: e.target.value })
                }
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>
            <div className="mt-4">
              <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full">
                Thêm đại lý
              </button>
            </div>
          </form>
        </div>
      )}

      {showEditForm && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
          onClick={handleOverlayClick}
        >
          <form
            onSubmit={handleEditDealerSubmit}
            className="bg-white p-6 rounded shadow-md w-[90%] max-w-md"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">Sửa đại lý</h2>
            <div>
              <label className="block mb-1">Tên đại lý:</label>
              <input
                type="text"
                value={newDealer.name}
                onChange={(e) =>
                  setNewDealer({ ...newDealer, name: e.target.value })
                }
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Mã đại lý:</label>
              <input
                type="text"
                value={newDealer.code}
                onChange={(e) =>
                  setNewDealer({ ...newDealer, code: e.target.value })
                }
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Địa chỉ:</label>
              <input
                type="text"
                value={newDealer.address}
                onChange={(e) =>
                  setNewDealer({ ...newDealer, address: e.target.value })
                }
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Số điện thoại:</label>
              <input
                type="text"
                value={newDealer.sdt}
                onChange={(e) =>
                  setNewDealer({ ...newDealer, sdt: e.target.value })
                }
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>
            <div className="mt-4">
              <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full">
                Cập nhật đại lý
              </button>
            </div>
          </form>
        </div>
      )}

      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-200 p-2">Chọn</th>
            <th className="border border-gray-200 p-2">STT</th>
            <th className="border border-gray-200 p-2">Tên đại lý</th>
            <th className="border border-gray-200 p-2">Mã đại lý</th>
            <th className="border border-gray-200 p-2">Địa chỉ</th>
            <th className="border border-gray-200 p-2">SĐT</th>
            <th className="border border-gray-200 p-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((item, index) => (
            <tr key={item.number}>
              <td className="border border-gray-200 p-2 text-center">
                <input
                  type="checkbox"
                  onChange={() => handleDealerSelect(item.number)}
                />
              </td>
              <td className="border border-gray-200 p-2">{index + 1}</td>
              <td className="border border-gray-200 p-2">{item.name}</td>
              <td className="border border-gray-200 p-2">{item.code}</td>
              <td className="border border-gray-200 p-2">{item.address}</td>
              <td className="border border-gray-200 p-2">{item.sdt}</td>
              <td className="border border-gray-200 p-2">
                <div className="flex justify-center space-x-2">
                <button
                  onClick={() => handleEditClick(item)}
                  className="style-button"
                >
                  Sửa
                </button>
                <button
                  onClick={() => handleDeleteClick(item.number)}
                  className="style-button"
                >
                  Xóa
                </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}