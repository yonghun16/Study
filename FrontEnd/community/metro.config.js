const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Expo Router의 파일 기반 라우팅을 위해 필요한 설정입니다.
config.transformer.unstable_allowRequireContext = true;

module.exports = config;
