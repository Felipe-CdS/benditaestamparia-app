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
eval("function openMenu() {\n  var navbarPhoneStyle = document.getElementById(\"navbar-phone\").style.display;\n\n  if (navbarPhoneStyle == \"flex\") {\n    navbarPhoneStyle = \"none\";\n  } else {\n    navbarPhoneStyle = \"flex\";\n  }\n}\n\ndocument.getElementById(\"navbar-phone-button\").addEventListener(\"click\", openMenu);\n\n//# sourceURL=webpack://frontend/./scripts/OpenMenu.js?");
/******/ })()
;