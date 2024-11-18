const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const checkPalindrome = async (input: string) => {
  try {
    const response = await fetch(`${backendUrl}/check-palindrome`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    });

    if (!response.ok) {
      throw new Error("Error");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error", error);
    throw new Error("Error");
  }
};

export const getPalindromeHistory = async () => {
  try {
    const response = await fetch(`${backendUrl}/palindrome-history`);

    if (!response.ok) {
      throw new Error("Error");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error", error);
    throw new Error("Error");
  }
};
