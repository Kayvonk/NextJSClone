(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 908:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "react-responsive-carousel"
var external_react_responsive_carousel_namespaceObject = require("react-responsive-carousel");;
;// CONCATENATED MODULE: ./src/components/Banner.js






function Banner() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "relative",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "absolute w-full h-10 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_responsive_carousel_namespaceObject.Carousel, {
      autoPlay: true,
      infiniteLoop: true,
      showStatus: false,
      showIndicators: false,
      showThumbs: false,
      interval: 5000,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          loading: "lazy",
          src: "images/electronics.png"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          loading: "lazy",
          src: "images/music.png"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          loading: "lazy",
          src: "images/clothing.png"
        })
      })]
    })]
  });
}

/* harmony default export */ var components_Banner = (Banner);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(49);
;// CONCATENATED MODULE: ./src/components/Header.js






function Header() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center bg-amazon_blue p-1 flex-grow py-2",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mt-2 flex items-center flex-grow sm:flex-grow-0",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/Kshopv2.png",
          className: "cursor-pointer",
          width: 150,
          height: 60,
          objectFit: "contain"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "hidden sm:flex items-center h-10 rounded-md cursor-pointer flex-grow bg-yellow-400 hover:bg-yellow-500",
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          className: "p-2 h-full 2-6 flex-grow flex-shrink rounded-l-md focus:outline-none",
          type: "text"
        }), /*#__PURE__*/jsx_runtime_.jsx(esm/* SearchIcon */.W1M, {
          className: "h-12 p-4"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "link",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Hello Kay"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "font-extrabold md:text-sm",
            children: "Account & Lists"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "link",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "font-extrabold md:text-sm",
            children: " Returns"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "font-extrabold md:text-sm",
            children: "& Orders"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "relative link flex items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "absolute top-0 right-0 md:right-7 bg-yellow-400 text-center rounded-full px-1 text-black font-bold",
            children: "0"
          }), /*#__PURE__*/jsx_runtime_.jsx(esm/* ShoppingCartIcon */.Q1y, {
            className: "h-10"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "hidden md:inline mt-2 font-extrabold md:text-sm",
            children: "Cart"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center space-x-4 p-2 pl-6 bg-amazon_blue-light text-white text-sm",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "link flex items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* MenuIcon */.Oqj, {
          className: "h-6 mr-1"
        }), "All"]
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link",
        children: "Video"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link",
        children: "Business"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link ",
        children: "Today's Deals"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link hidden md:inline-flex",
        children: "Electronics"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link hidden md:inline-flex",
        children: "Food & Grocery"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link hidden md:inline-flex",
        children: "Premium"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link hidden md:inline-flex",
        children: "Buy Again"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link hidden md:inline-flex",
        children: "Shopper Toolkit"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link hidden md:inline-flex",
        children: "Health & Personal Care"
      })]
    })]
  });
}

/* harmony default export */ var components_Header = (Header);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/index.js + 230 modules
var solid_esm = __webpack_require__(802);
;// CONCATENATED MODULE: external "react-currency-formatter"
var external_react_currency_formatter_namespaceObject = require("react-currency-formatter");;
var external_react_currency_formatter_default = /*#__PURE__*/__webpack_require__.n(external_react_currency_formatter_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Product.js






const MIN_RATING = 1;
const MAX_RATING = 5;
function Product({
  id,
  title,
  price,
  description,
  category,
  image
}) {
  const {
    0: rating
  } = (0,external_react_.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
  const {
    0: freeShipping
  } = (0,external_react_.useState)(Math.random() < 0.5);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "relative flex flex-col m-5 bg-white z-30 p-10",
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "absolute top-2 right-2 text-xs italic text-gray-400",
      children: category
    }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      src: image,
      height: 200,
      width: 200,
      objectFit: "contain"
    }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
      className: "my-3",
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex",
      children: Array(rating).fill().map((_, i) => /*#__PURE__*/jsx_runtime_.jsx(solid_esm/* StarIcon */.r7p, {
        className: "h-5 text-yellow-500"
      }))
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "text-xs my-2 line-clamp-2",
      children: description
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mb-5",
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_currency_formatter_default()), {
        quantity: price,
        currency: "USD"
      })
    }), freeShipping && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center space-x-2 -mt-5",
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        className: "w-6",
        src: "images/icons8-free-shipping-48.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-xs text-gray-500",
        children: " FREE Next-day Delivery"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      className: "mt-auto button",
      children: " Add to Cart "
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/ProductFeed.js




function ProductFeed({
  products
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:-mt-10 mx-auto",
    children: [products.slice(0, 4).map(({
      id,
      title,
      price,
      description,
      category,
      image
    }) => /*#__PURE__*/jsx_runtime_.jsx(Product, {
      id: id,
      title: title,
      price: price,
      description: description,
      category: category,
      image: image
    }, id)), /*#__PURE__*/jsx_runtime_.jsx("img", {
      className: "col-span-full w-screen",
      src: "images/adventure.png",
      alt: "travel-ad"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "md:col-span-2",
      children: products.slice(4, 5).map(({
        id,
        title,
        price,
        description,
        category,
        image
      }) => /*#__PURE__*/jsx_runtime_.jsx(Product, {
        id: id,
        title: title,
        price: price,
        description: description,
        category: category,
        image: image
      }, id))
    }), products.slice(5, products.length).map(({
      id,
      title,
      price,
      description,
      category,
      image
    }) => /*#__PURE__*/jsx_runtime_.jsx(Product, {
      id: id,
      title: title,
      price: price,
      description: description,
      category: category,
      image: image
    }, id))]
  });
}
;// CONCATENATED MODULE: ./src/pages/index.js






function Home({
  products
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bg-gray-100",
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: " KShop"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: "max-w-screen-2xl mx-auto",
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_Banner, {}), /*#__PURE__*/jsx_runtime_.jsx(ProductFeed, {
        products: products
      })]
    })]
  });
}
async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(res => res.json());
  return {
    props: {
      products
    }
  };
} // GET >>> 'https://fakestoreapi.com/products/category/jewelery

/***/ }),

/***/ 273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,618], function() { return __webpack_exec__(908); });
module.exports = __webpack_exports__;

})();