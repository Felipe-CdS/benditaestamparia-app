/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!*****************************!*\
  !*** ./scripts/OpenMenu.js ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("function openMenu() {\n  var navbarPhoneStyle = document.getElementById(\"navbar-phone\"); //.style.display;\n\n  console.log(navbarPhoneStyle);\n\n  if (navbarPhoneStyle.style.display == \"flex\") {\n    navbarPhoneStyle.style.display = \"none\";\n    document.getElementById(\"store-header\").style.top = \"5rem\";\n  } else {\n    navbarPhoneStyle.style.display = \"flex\";\n    document.getElementById(\"store-header\").style.top = \"calc(60vh + 5rem)\";\n  }\n}\n\ndocument.getElementById(\"navbar-phone-button\").addEventListener(\"click\", openMenu);\n\n//# sourceURL=webpack://frontend/./scripts/OpenMenu.js?");
/******/ })()
;