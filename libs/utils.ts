import {
  keyPrefixUserTypeDevice,
  keyPrefixUserTypeMobile,
  keyPrefixDevice
} from "./constants";

export const userIdToDeviceUserId = (userId: string): string =>
  keyPrefixUserTypeDevice + userId;

export const userIdToMobileUserId = (userId: string): string =>
  keyPrefixUserTypeMobile + userId;

export const userIdToDeviceId = (userId: string): string =>
  keyPrefixDevice + userId;
