import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/userSlice';
import { addItem, editItem, deleteItem } from '../redux/itemsSlice';

function ItemsPage() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const [currentItem, setCurrentItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? URL.createObjectURL(files[0]) : value, // Для зображень
    }));
  };

  const handleSave = () => {
    if (currentItem) {
      dispatch(
        editItem({
          id: currentItem.id,
          updatedItem: { ...currentItem, ...formData },
        })
      );
    } else {
      dispatch(
        addItem({
          id: Date.now(),
          ...formData,
        })
      );
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({ name: '', description: '', price: '', image: '' });
    setCurrentItem(null);
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
    setFormData(item);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800">Your Items</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </header>

      <div className="mb-6 bg-white rounded-md shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">
          {currentItem ? 'Edit Item' : 'Add New Item'}
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter item name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter item description"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter item price"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <button
            type="button"
            onClick={handleSave}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            {currentItem ? 'Save Changes' : 'Add Item'}
          </button>
        </form>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-md shadow-md p-4 flex flex-col items-center"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-cover rounded-md mb-4"
              />
            )}
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="text-xl font-bold text-green-600">${item.price}</p>
            <div className="mt-4 flex">
              <button
                onClick={() => handleEdit(item)}
                className="mr-2 px-3 py-1 bg-yellow-400 text-white rounded-md hover:bg-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteItem(item.id))}
                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemsPage;
