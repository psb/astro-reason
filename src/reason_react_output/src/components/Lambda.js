// Generated by Melange

import * as Curry from "melange.runtime/curry.js";
import * as Fetch from "melange-fetch/./Fetch.js";
import * as React from "react";
import * as Caml_option from "melange.runtime/caml_option.js";
import * as Json_decode from "../../node_modules/@glennsl/bs-json/src/Json_decode.js";

function decodeFetchResult(json) {
  return {
          joke: Json_decode.field("joke", Json_decode.string, json),
          status: Json_decode.field("status", Json_decode.$$int, json),
          count: Json_decode.field("count", Json_decode.$$int, json)
        };
}

function Lambda(Props) {
  var match = React.useReducer((function (state, action) {
          if (action) {
            return {
                    data: action._0,
                    loading: false
                  };
          } else {
            return {
                    data: state.data,
                    loading: true
                  };
          }
        }), {
        data: {
          joke: "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
          status: 200,
          count: 0
        },
        loading: false
      });
  var dispatch = match[1];
  var state = match[0];
  var loadingImage = function (param) {
    return React.createElement("img", {
                alt: "laugh",
                src: "/laugh.svg"
              });
  };
  var errorImage = function (param) {
    return React.createElement("img", {
                className: "mx-auto",
                alt: "error dog",
                src: "/500.jpg"
              });
  };
  var joke = function (text) {
    return React.createElement("p", {
                className: "p-6 mb-2 rounded-lg text-lg bg-yellow-400"
              }, text);
  };
  var buttons = function (currentCount) {
    return React.createElement("div", {
                className: "flex justify-around"
              }, React.createElement("a", {
                    className: "rounded-md p-4 mt-2 bg-slate-400 text-white hover:bg-slate-500",
                    href: "/"
                  }, "Home"), React.createElement("button", {
                    className: "rounded-md p-4 mt-2 bg-blue-500 text-white hover:bg-blue-600",
                    onClick: (function (param) {
                        Curry._1(dispatch, /* Loading */0);
                        var callback = function (data) {
                          Curry._1(dispatch, /* Loaded */{
                                _0: data
                              });
                        };
                        var payload = {};
                        payload["count"] = 0;
                        fetch(".netlify/functions/joke", Curry._2(Fetch.RequestInit.make(/* Post */2, {
                                              "Content-Type": "application/json"
                                            }, Caml_option.some(JSON.stringify(payload)), undefined, undefined, undefined)(undefined, undefined, undefined, undefined, undefined), undefined, undefined)).then(function (prim) {
                                  return prim.json();
                                }).then(function (json) {
                                var data = decodeFetchResult(json);
                                Curry._1(callback, data);
                                return Promise.resolve(undefined);
                              }).catch(function (err) {
                              var data = {
                                joke: "",
                                status: 0,
                                count: currentCount
                              };
                              console.log("Error", err);
                              Curry._1(callback, data);
                              return Promise.resolve(undefined);
                            });
                      })
                  }, "Get another joke"));
  };
  return React.createElement("div", {
              className: "container mx-auto max-w-md text-center p-4"
            }, state.loading ? loadingImage(undefined) : React.createElement(React.Fragment, undefined, state.data.status !== 200 ? errorImage(undefined) : joke(state.data.joke), buttons(state.data.count)));
}

var make = Lambda;

export {
  make ,
}
/* react Not a pure module */
