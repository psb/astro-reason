// Generated by Melange
'use strict';


((require('isomorphic-fetch')));

function fetchJoke(param) {
  return fetch("https://icanhazdadjoke.com/").then(function (prim) {
                  return prim.json();
                }).then(function (json) {
                return Promise.resolve({
                            TAG: /* Ok */0,
                            _0: json
                          });
              }).catch(function (err) {
              return Promise.resolve({
                          TAG: /* Error */1,
                          _0: err
                        });
            });
}

function handler(request, _response) {
  console.log("Request", request);
}

exports.fetchJoke = fetchJoke;
exports.handler = handler;
/*  Not a pure module */
