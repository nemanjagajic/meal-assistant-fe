"use strict";
exports.id = 412;
exports.ids = [412];
exports.modules = {

/***/ 123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ TAB),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



var TAB;
(function(TAB) {
    TAB["HOME"] = 'home';
    TAB["ADD_FOOD"] = 'addFood';
})(TAB || (TAB = {}));
const NavBar = ({ activeTab  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: "flex flex-row bg-teal-600 p-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `text-white pl-2 pr-3 cursor-pointer ${activeTab === TAB.HOME && 'font-bold'}`,
                onClick: ()=>router.replace('/')
                ,
                children: "Food"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `text-white pl-2 pr-3 cursor-pointer ${activeTab === TAB.ADD_FOOD && 'font-bold'}`,
                onClick: ()=>router.push('/addFood')
                ,
                children: "Add food"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);


/***/ }),

/***/ 847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ calculateValueByPortionSize),
/* harmony export */   "W": () => (/* binding */ limitText)
/* harmony export */ });
const calculateValueByPortionSize = (value, size)=>{
    return value / 100 * size || 0;
};
const limitText = (str, limit)=>{
    return str.length > limit ? str.substring(0, limit) + '...' : str;
};


/***/ })

};
;