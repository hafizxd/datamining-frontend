import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import API from "../api";
import { useNavigate } from "react-router-dom";

const Riwayat = () => {
  const navigate = useNavigate()

  const [histories, setHistories] = useState([])

  useEffect(() => {
    let token = localStorage.getItem('auth_token')
    if (token == null) {
      navigate('/')
      return
    }

    axios.get(
      `${API}predicts`, 
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('auth_token')
        },
      }
    ).then((res) => {
      if (res.data.success) {
        let histories = res.data.payload
        
        if (Array.isArray(histories) && histories.length > 0) {
          setHistories(histories)
        }
      } else {
        alert('Error: ' + res.data.message)
      }
    }).catch((err) => {
      console.log(err.response)
      if (err.response) {
        if (err.response.data.msg = "Token has expired") {
          alert('Error Login: Silahkan login kembali')
          localStorage.removeItem('auth_token')
          navigate('/')
          return
        }
        alert('Error: ' + err.response.data.message);
      } else if (err.request) {
        alert('Error: No response received from server.');
      } else {
        alert('Error: ' + err.message);
      }
    })
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-36 py-20">
        <h1 className="text-xl font-semibold text-center mb-10">
          Riwayat Prediksi
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 bg-white shadow-md rounded-lg p-10">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-600">
                  Age
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-600">
                  Gender
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-600">
                  BMI
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-600">
                  Hypertension
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-600">
                  Heart Desease
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-600">
                  Smoking History
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-600">
                  HbA1c Level
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-600">
                  Blood Glucose Level
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-600">
                  Diabetes
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-600">
                  Waktu Prediksi
                </th>
              </tr>
            </thead>
            <tbody>
              {histories.map((row, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {row.age}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {row.gender}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {row.bmi}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {row.hypertension ? 'Ya' : 'Tidak'}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {row.heart_desease ? 'Ya' : 'Tidak'}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {row.smoking_history}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {row.hbac}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {row.blood_glucose}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {row.diabetes ? 'Ya' : 'Tidak'}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {row.created_at}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Riwayat;
