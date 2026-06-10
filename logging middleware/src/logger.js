// src/logger.js

import dotenv from "dotenv";
import axios from "axios";

import {
  STACKS,
  LEVELS,
  BACKEND_PACKAGES,
  FRONTEND_PACKAGES,
  COMMON_PACKAGES
} from "./constants.js";

dotenv.config();

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const API_URL =
  "http://4.224.186.213/evaluation-service/logs";

export async function Log(
  stack,
  level,
  packageName,
  message
) {
  try {

    if (!STACKS.includes(stack)) {
      throw new Error("Invalid stack");
    }

    if (!LEVELS.includes(level)) {
      throw new Error("Invalid level");
    }

    const validPackages =
      stack === "backend"
        ? [...BACKEND_PACKAGES, ...COMMON_PACKAGES]
        : [...FRONTEND_PACKAGES, ...COMMON_PACKAGES];

    if (!validPackages.includes(packageName)) {
      throw new Error("Invalid package");
    }

    const payload = {
      stack,
      level,
      package: packageName,
      message
    };

    const response = await axios.post(
      API_URL,
      payload,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log(response.data);

    return response.data;

  } catch (error) {

    console.error(
      "Logging Middleware Error:",
      error.response?.data || error.message
    );

    return null;
  }
}