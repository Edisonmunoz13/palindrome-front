"use client";
import { useEffect, useState } from "react";
import { getPalindromeHistory } from "../services/palindromeServices";
import { PalindromeItem } from "../interfaces/PalindromeItem.interface";
import ConfirmationModal from "../components/ConfirmationModal";
import PalindromeChecker from "../components/PalindromeChecker";

export default function Home() {
  const [history, setHistory] = useState<PalindromeItem[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showHistory, setShowHistory] = useState(false);

  const fetchHistory = async () => {
    const historyData = await getPalindromeHistory();
    setHistory(historyData);
  };

  useEffect(() => {
    fetchHistory();
  }, [modalIsOpen]);

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  const setModal = (message: string, isOpen: boolean) => {
    setModalMessage(message);
    setModalIsOpen(isOpen);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleConfirmModal = () => {
    setModalIsOpen(false);
    setShowHistory(true);
  };

  return (
    <div className="w-full max-w-[1200px] mt-16 mx-auto font-[family-name:var(--font-geist-sans)] mb-12">
      <div className="flex flex-col w-full text-center px-4">
        <h2 className="font-bold text-2xl py-8 text-[#444444]">
          Enter a phrase or word to find out if it is a palindrome
        </h2>

        <PalindromeChecker
          history={history}
          toggleHistory={toggleHistory}
          setModal={setModal}
          showHistory={showHistory}
        />

        <ConfirmationModal
          isOpen={modalIsOpen}
          message={modalMessage}
          onClose={handleCloseModal}
          onConfirm={handleConfirmModal}
        />
      </div>
    </div>
  );
}
