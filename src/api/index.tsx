// const BASE_URL = "http://localhost:3000/user";
// const AUTH_URL = "http://localhost:3000/auth";

const BASE_URL = "https://talented-colt-veil.cyclic.app/user";
const AUTH_URL = "https://talented-colt-veil.cyclic.app/auth";

export interface Task {
  _id: string;
  title: string;
  description: string;
  priority: string;
  status: string;
  dueDate: string;
}

export interface TasksResponse {
  message: string;
  tasks: Task[];
  count: number;
}

export interface TaskFilters {
  search?: string;
  priority?: string;
  status?: string;
  dueDate?: string;
  sortOrder?: "asc" | "desc";
}

export const fetchTasks = async (
  filters: TaskFilters = {}
): Promise<TasksResponse> => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    throw new Error("Access token not found in local storage.");
  }

  // Transforming the filter object into query parameters
  const queryParams = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value) {
      queryParams.append(key, value);
    }
  });

  try {
    const response = await fetch(
      `${BASE_URL}/tasks?${queryParams.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const createNewTask = async (task: Task): Promise<Task> => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    throw new Error("Access token not found in local storage.");
  }

  try {
    const response = await fetch(`${BASE_URL}/tasks`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    return data.task;
  } catch (error) {
    console.error("Error creating new task:", error);
    throw error;
  }
};

export const updateTask = async (id: string, task: Task): Promise<Task> => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    throw new Error("Access token not found in local storage.");
  }

  try {
    const response = await fetch(`${BASE_URL}/tasks/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    return data.task;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

export const deleteTask = async (id: string): Promise<void> => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    throw new Error("Access token not found in local storage.");
  }

  try {
    const response = await fetch(`${BASE_URL}/tasks/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};

export const markTaskAsComplete = async (id: string): Promise<Task> => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    throw new Error("Access token not found in local storage.");
  }

  try {
    const response = await fetch(`${BASE_URL}/tasks/${id}/complete`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    return data.task;
  } catch (error) {
    console.error("Error marking task as complete:", error);
    throw error;
  }
};

export const fetchTaskById = async (id: string): Promise<Task> => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    throw new Error("Access token not found in local storage.");
  }

  try {
    const response = await fetch(`${BASE_URL}/tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    return data.task;
  } catch (error) {
    console.error("Error fetching task by ID:", error);
    throw error;
  }
};

export interface LoginResponse {
  message: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExp: string;
  refreshTokenExp: string;
  role: string;
}

export const login = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${AUTH_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  role: string;
}

interface UserData {
  username: string;
  email: string;
  password: string;
  role: string;
  verified: boolean;
  verificationToken: string;
  _id: string;
  __v: number;
}

export interface RegisterResponse {
  message: string;
  data: UserData;
}

export const register = async (
  registerData: RegisterRequest
): Promise<RegisterResponse> => {
  try {
    const response = await fetch(`${AUTH_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerData),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error || "Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

export const verifyEmail = async (
  token: string
): Promise<{ message: string }> => {
  try {
    const response = await fetch(`${AUTH_URL}/verify-email/${token}`);
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error || "Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error verifying email:", error);
    throw error;
  }
};

export const requestPasswordReset = async (email: string): Promise<void> => {
  try {
    const response = await fetch(`${AUTH_URL}/request-password-reset`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
  } catch (error) {
    console.error("Error requesting password reset:", error);
    throw error;
  }
};

export const resetPassword = async (
  resetToken: string,
  newPassword: string
): Promise<{ message: string }> => {
  try {
    const response = await fetch(`${AUTH_URL}/reset-password/${resetToken}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newPassword }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error || "Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Error resetting password:", error);
    throw error;
  }
};
