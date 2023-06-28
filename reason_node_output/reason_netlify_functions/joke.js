// Generated by Melange
'use strict';

var Json = require("../node_modules/@glennsl/bs-json/src/Json.js");
var Curry = require("melange.runtime/curry.js");
var Fetch = require("melange-fetch/./Fetch.js");
var Caml_option = require("melange.runtime/caml_option.js");
var Json_decode = require("../node_modules/@glennsl/bs-json/src/Json_decode.js");

require('isomorphic-fetch')
;

function decodePostBody(json_string) {
  var jc = Json.parse(json_string);
  if (jc !== undefined) {
    return {
            count: Json_decode.field("count", Json_decode.$$int, Caml_option.valFromOption(jc))
          };
  } else {
    return {
            count: 0
          };
  }
}

function fetchJoke(param) {
  return fetch("https://icanhazdadjoke.com/", Curry._2(Fetch.RequestInit.make(/* Get */0, {
                              "Content-Type": "application/json"
                            }, undefined, undefined, undefined, undefined)(undefined, undefined, undefined, undefined, undefined), undefined, undefined)).then(function (prim) {
                  return prim.json();
                }).then(function (json) {
                console.log("Server Json", json);
                return Promise.resolve({
                            TAG: /* Ok */0,
                            _0: json
                          });
              }).catch(function (err) {
              console.log("server Error Json", err);
              return Promise.resolve({
                          TAG: /* Error */1,
                          _0: err
                        });
            });
}

function handler($$event, _context, callback) {
  var jokeCount = decodePostBody($$event.body);
  console.log("jc", jokeCount);
  fetchJoke(undefined).then(function (res) {
        if (res.TAG === /* Ok */0) {
          var data = res._0;
          console.log("Data", data);
          var body = JSON.stringify(data);
          callback(undefined, {
                statusCode: 200,
                body: body
              }, undefined);
        } else {
          var body$1 = JSON.stringify(res._0);
          callback(undefined, {
                statusCode: 500,
                body: body$1
              }, undefined);
        }
        return Promise.resolve(undefined);
      });
}

exports.decodePostBody = decodePostBody;
exports.fetchJoke = fetchJoke;
exports.handler = handler;
/*  Not a pure module */
