import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import axios from "axios";
import API from "../api";

function Predict() {
  useEffect(() => {
    let token = localStorage.getItem('auth_token')
    if (token == null) {
      navigate('/')
    }
  }, [])

  const navigate = useNavigate();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isPredictionSuccessful, setPredictionSuccessful] = useState(true);

  const closeModal = () => {
    setModalVisible(false);
  };

  const [formData, setFormData] = useState({
    gender: 'Male',
    age: '',
    hypertension: '0',
    heart_desease: '0',
    smoking_history: 'never',
    bmi: '',
    hbac: '',
    blood_glucose: ''
  })

  const submitPredict = (e) => {
    e.preventDefault()

    for (const key in formData) {
      if (formData[key] == '') {
        alert(`Field ${key} tidak boleh kosong`)
        return
      }
    }

    axios.post(
      `${API}predicts`, 
      formData,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('auth_token')
        },
      }
    ).then((res) => {
      let data = res.data
      if (data.success) {
        setPredictionSuccessful(!data.is_diabetes);
        setModalVisible(true);

      } else {
        alert('Error: ' + data.message)
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
  }

  return (
    <div style={{ padding: "2rem" }}>
      <div className="mx-auto w-max-lg w-5/6">
        <div className="w-2/3 mx-auto">
          <form className="space-y-10 py-9" onSubmit={submitPredict}>
            <div className="flex space-x-10">
              <div className="w-1/2 mx-auto">
                <p className="text-gray-700 mb-2 text-xs">input nilai age</p>
                <input
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  name="year"
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
                />
              </div>
              <div className="w-1/2 mx-auto">
                <p className="text-gray-700 mb-2 text-xs">input nilai gender</p>
                <select
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  name="mileage"
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div className="flex space-x-10">
              <div className="w-1/2 mx-auto">
                <p className="text-gray-700 mb-2 text-xs">
                apakah hypertension
                </p>
                <select
                  onChange={(e) => setFormData({ ...formData, hypertension: e.target.value })}
                  name="tax"
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
                >
                  <option value="0">Tidak</option>
                  <option value="1">Ya</option>
                </select>
              </div>
              <div className="w-1/2 mx-auto">
                <p className="text-gray-700 mb-2 text-xs">
                  apakah heart disease
                </p>
                <select
                  onChange={(e) => setFormData({ ...formData, heart_desease: e.target.value })}
                  name="mpg"
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
                >
                  <option value="0">Tidak</option>
                  <option value="1">Ya</option>
                </select>
              </div>
            </div>
            <div className="flex space-x-10">
              <div className="w-1/2 mx-auto">
                <p className="text-gray-700 mb-2 text-xs">
                  smoking history
                </p>
                <select
                  onChange={(e) => setFormData({ ...formData, smoking_history: e.target.value })}
                  name="year"
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
                >
                  <option value="never">Never</option>
                  <option value="no info">No Info</option>
                  <option value="current">Current</option>
                  <option value="former">Former</option>
                </select>
              </div>
              <div className="w-1/2 mx-auto">
                <p className="text-gray-700 mb-2 text-xs">input nilai bmi</p>
                <input
                  onChange={(e) => setFormData({ ...formData, bmi: e.target.value })}
                  name="mileage"
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
                />
              </div>
            </div>
            <div className="flex space-x-10">
              <div className="w-1/2 mx-auto">
                <p className="text-gray-700 mb-2 text-xs">
                  input nilai hbA1c level
                </p>
                <input
                  onChange={(e) => setFormData({ ...formData, hbac: e.target.value })}
                  name="year"
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
                />
              </div>
              <div className="w-1/2 mx-auto">
                <p className="text-gray-700 mb-2 text-xs">
                  input blood glucose
                </p>
                <input
                  onChange={(e) => setFormData({ ...formData, blood_glucose: e.target.value })}
                  name="mileage"
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md"
                />
              </div>
            </div>
            <div className=" flex justify-center space-x-5">
              <button
                type="submit"
                className="text-sm px-4 py-2.5 text-white bg-black hover:border hover:border-black hover:bg-white hover:text-black focus:outline-none rounded-md"
              >
                Tes Prediksi Sekarang
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  navigate("/riwayat")
                }}
                className="text-sm px-4 py-2.5 border border-black hover:bg-black hover:text-white focus:outline-none rounded-md"
              >
                Lihat Riwayat
              </button>
            </div>
          </form>
        </div>
      </div>

      <Modal
        isVisible={isModalVisible}
        onClose={closeModal}
        isSuccess={isPredictionSuccessful}
      />
    </div>
  );
}

export default Predict;
