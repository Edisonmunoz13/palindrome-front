import { useState } from "react";
import { checkPalindrome } from "../services/palindromeServices";
import { PalindromeItem } from "../interfaces/PalindromeItem.interface";
interface PalindromeCheckerProps {
  history: PalindromeItem[];
  toggleHistory: () => void;
  setModal: (message: string, isOpen: boolean) => void;
  showHistory: boolean;
}

export default function PalindromeChecker({
  history,
  toggleHistory,
  setModal,
  showHistory,
}: PalindromeCheckerProps) {
  const [input, setInput] = useState<string>("");

  const handleCheckPalindrome = async () => {
    const data = await checkPalindrome(input);
    const message = data.isPalindrome
      ? "It is a palindrome!"
      : "It is not a palindrome";
    setModal(message, true);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a phrase"
        className="p-3 w-full rounded-full bg-gray-200 px-6"
      />
      <div className="flex flex-row items-center justify-around w-full max-w-[700px]">
        <button
          onClick={handleCheckPalindrome}
          className="text-sm mt-4 py-2 w-[150px] font-semibold bg-[#a676ef] text-white rounded-full"
        >
          Check Palindrome
        </button>

        <button
          onClick={toggleHistory}
          className="text-sm mt-4 py-2 w-[150px] mx-1 font-semibold bg-[#444444] text-white rounded-full"
        >
          {showHistory ? "Hidde history" : "Show history"}
        </button>
      </div>

      {showHistory && history.length > 0 && (
        <div className="mt-8 w-full bg-gray-200 pb-8 rounded-[30px] text-[#444444] px-2">
          <h3 className="text-lg font-semibold my-3">Palindrome History</h3>
          <div className="flex flex-col items-center justify-center">
            <div className="w-full flex flex-row justify-between px-12 font-bold py-1">
              <h3>Phrases</h3>
              <h3>It is palindrome?</h3>
            </div>
            {history.map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-center justify-between w-full max-w-[1100px] bg-white my-1 px-8 rounded-full"
              >
                <span>{item.input}</span>
                <span>{item.isPalindrome ? "Yes" : "No"}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
