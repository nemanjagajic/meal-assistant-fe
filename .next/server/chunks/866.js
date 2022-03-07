"use strict";
exports.id = 866;
exports.ids = [866];
exports.modules = {

/***/ 145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": () => (/* binding */ useAddFood),
  "M": () => (/* binding */ useFetchFoods)
});

// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(175);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./services/request.ts

const BASE_API_ENDPOINT = "http://46.101.119.178:1337";
const IS_SERVER = "undefined" === 'undefined';
const defaultConfig = {
    baseURL: BASE_API_ENDPOINT,
    responseType: 'json'
};
const attachHeaders = (instance, headers)=>{
    Object.keys(headers).forEach((key)=>{
        // @ts-ignore
        instance.defaults.headers[key] = headers[key];
    });
};
// @ts-ignore
const request = (config = defaultConfig)=>{
    const instance = external_axios_default().create(config);
    const token = !IS_SERVER && localStorage.getItem('token');
    const headers = {
        accept: 'application/json',
        authorization: ''
    };
    if (token) headers.authorization = token;
    attachHeaders(instance, headers);
    return instance;
};
/* harmony default export */ const services_request = (request());

;// CONCATENATED MODULE: ./services/api/foods.ts

const API_ENDPOINTS = {
    FOODS: '/api/foods'
};
const getFoods = async ()=>{
    try {
        const { data: responseData  } = await services_request.get(API_ENDPOINTS.FOODS);
        return responseData.data;
    } catch (e) {
        throw e;
    }
};
const createFood = async (food)=>{
    try {
        const { data: responseData  } = await services_request.post(API_ENDPOINTS.FOODS, food);
        return responseData.data;
    } catch (e) {
        throw e;
    }
};

;// CONCATENATED MODULE: ./hooks/foods.ts


const useFetchFoods = ()=>{
    const { data , error , isLoading , isFetching  } = (0,external_react_query_.useQuery)('foods', getFoods);
    return {
        data,
        error,
        isLoading,
        isFetching
    };
};
const useAddFood = (callbackSuccessFn)=>{
    const queryClient = (0,external_react_query_.useQueryClient)();
    const { mutate , isLoading  } = (0,external_react_query_.useMutation)(createFood, {
        onSuccess: async ()=>{
            await queryClient.invalidateQueries('foods');
            callbackSuccessFn === null || callbackSuccessFn === void 0 ? void 0 : callbackSuccessFn();
        }
    });
    return {
        mutate,
        isLoading
    };
};


/***/ }),

/***/ 192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ CategoryType)
/* harmony export */ });
var CategoryType;
(function(CategoryType) {
    CategoryType["BREAKFAST"] = 'breakfast';
    CategoryType["MAIN"] = 'main';
})(CategoryType || (CategoryType = {}));


/***/ })

};
;