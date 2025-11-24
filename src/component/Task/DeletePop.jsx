// import React from "react";

// export default function DeletePop({ onClose }) {
//   return (
//     <div>
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//         <div className="bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-lg font-semibold mb-4">Are you sure?</h2>
//           <div className="flex justify-end gap-4">
//             <button
//               className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
//               onClick={onClose}
//             >
//               Cancel
//             </button>
//             <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function DeletePop({ onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Are you sure you want to delete this record?
        </h2>
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
