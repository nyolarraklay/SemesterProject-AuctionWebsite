import { load } from "../storage/index.mjs";

export const isUserLoggedIn = () => Boolean(load("token"));

export const profile = () => load("profile");

export const isLoggedIn = false;
