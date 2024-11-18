import React from "react";

interface ConfirmationModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
  onConfirm: () => void;
}

export default function ConfirmationModal({
  isOpen,
  message,
  onClose,
  onConfirm,
}: ConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-[22px] w-1/3">
        <h2 className="text-lg text-[#444444] font-bold mb-4">{message}</h2>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onConfirm}
            className="p-2 bg-[#a676ef] font-semibold w-[150px] text-white rounded-full"
          >
            Confirm
          </button>
          <button
            onClick={onClose}
            className="p-2 bg-[#444444] font-semibold w-[150px] text-white rounded-full"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
