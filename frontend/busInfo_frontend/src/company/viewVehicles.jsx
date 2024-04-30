import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './bg.css'

function Navbar() {
  return (
    <nav className="flex justify-center items-center flex-wrap bg-gray-900 p-4 font-sans"> {/* Apply font-sans class to the nav element */}
      <Link to="/" className="text-cyan-400 underline-none mr-auto text-xl">BusInfo</Link>
      <div className="flex justify-center items-center space-x-4">
        <Link to="/" className="text-white hover:text-blue-500 underline-none">Home</Link>
        <Link to="/" className="text-white hover:text-blue-500 underline-none">Logout</Link>
      </div>
    </nav>
  );
}


function ViewVehicle() {
    const [vehicles, setVehicles] = useState([]);
  
  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/users/viewVehicles", { withCredentials: true });
        setVehicles(response.data.vehicles);
      } catch (error) {
        console.error("Error fetching drivers:", error);
      }
    };
    fetchDrivers();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`; // Format as day/month/year
  };
  
    return (
      <div className="bg-gray-700 p-8">
        <div className="bg-white p-4 rounded-md shadow-md">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Vehicle Identification Number</th>
                <th className="px-4 py-2">Permit Expiry Date</th>
              </tr>
            </thead>
            <tbody>
              {vehicles && vehicles.map((vehicle, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{vehicle.v_vin || ' '}</td>
                  <td className="border px-4 py-2">{formatDate(vehicle.v_perexp) || ' '}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  

function ViewVehiclePage(){
    return(
        <>
        <Navbar/>
          <ViewVehicle/>
        </>
    );
}

export default ViewVehiclePage;
