const BASE_URL = "http://localhost:3000/admin";

export interface User {
  _id?: string;
  username: string;
  email: string;
  role?: string;
  verified?: boolean;
  completedTask?: number;
  pendingTask?: number;
}

export const fetchUsers = async (): Promise<User[]> => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    throw new Error("Access token not found in local storage.");
  }

  try {
    const response = await fetch(`${BASE_URL}/list-user`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json();
    return data.data; // Adjusted to match backend response structure
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const createUser = async (
  user: Omit<User, "_id" | "verified" | "completedTask" | "pendingTask">
): Promise<User> => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    throw new Error("Access token not found in local storage.");
  }

  try {
    const response = await fetch(`${BASE_URL}/create-user`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json();
    return data.data; // Adjusted to match backend response structure
  } catch (error) {
    console.error("Error creating new user:", error);
    throw error;
  }
};

export const updateUser = async (
  id: string,
  user: Pick<User, "username" | "email">
): Promise<User> => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    throw new Error("Access token not found in local storage.");
  }

  try {
    const response = await fetch(`${BASE_URL}/update-user/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json();
    return data.data; // Adjusted to match backend response structure
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

export const deleteUser = async (id: string): Promise<void> => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    throw new Error("Access token not found in local storage.");
  }

  try {
    const response = await fetch(`${BASE_URL}/delete-user/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
