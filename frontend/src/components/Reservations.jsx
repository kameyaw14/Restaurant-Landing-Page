import React, { useState } from "react";
import { Flip, toast } from "react-toastify";

const Reservations = () => {
  const [reservation, setReservation] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    people: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservation({
      ...reservation,
      [name]: value,
    });
  };

  const resetForm = () => {
    setReservation({
      name: "",
      email: "",
      date: "",
      time: "",
      people: 1,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    resetForm();

    toast.success("Reservation submitted successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Flip,
    });
  };

  return (
    <div className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">
            Make a Reservation
          </h2>
          <p className="text-lg text-gray-600">
            Book a table for your next visit to our restaurant.
          </p>
        </div>

        {/* Reservation Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={reservation.name}
                onChange={handleInputChange}
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={reservation.email}
                onChange={handleInputChange}
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={reservation.date}
                onChange={handleInputChange}
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <div>
              <label
                htmlFor="time"
                className="block text-sm font-medium text-gray-700"
              >
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={reservation.time}
                onChange={handleInputChange}
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <div>
              <label
                htmlFor="people"
                className="block text-sm font-medium text-gray-700"
              >
                Number of People
              </label>
              <input
                type="number"
                id="people"
                name="people"
                value={reservation.people}
                onChange={handleInputChange}
                min="1"
                max="20"
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reservations;
