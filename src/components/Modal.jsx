import succes from "../assets/Accept.png";
import fail from "../assets/Cancel.png";

// eslint-disable-next-line react/prop-types
function Modal({ isVisible, onClose, isSuccess }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96 text-center">
        <div className="mb-4">
          <img
            src={isSuccess ? succes : fail}
            alt={isSuccess ? "Success" : "Failure"}
            className="mx-auto w-16 h-16"
          />
        </div>
        <p
          className={`text-lg font-semibold ${
            isSuccess ? "text-green-600" : "text-red-600"
          }`}
        >
          {isSuccess
            ? "Pasien tidak terkena diabetes"
            : "Pasien terkena diabetes"}
        </p>
        <button
          onClick={onClose}
          className={`mt-6 px-4 py-2 rounded-md text-white ${
            isSuccess
              ? "bg-green-500 hover:bg-green-600"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          Tutup
        </button>
      </div>
    </div>
  );
}

export default Modal;
