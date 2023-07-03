// Generated by Melange

import * as Curry from "melange.runtime/curry.js";
import * as Fetch from "melange-fetch/./Fetch.js";
import * as Bs_decoders__Decoders_bs from "../node_modules/bs-decoders/src-bs/decoders_bs.js";

require('isomorphic-fetch')
;

var jokeCountDecoder = Curry._2(Bs_decoders__Decoders_bs.Decode.$great$great$eq, Curry._2(Bs_decoders__Decoders_bs.Decode.field, "count", Bs_decoders__Decoders_bs.Decode.$$int), (function (count) {
        return Curry._1(Bs_decoders__Decoders_bs.Decode.succeed, {
                    count: count
                  });
      }));

var jokeDecoder = Curry._2(Bs_decoders__Decoders_bs.Decode.$great$great$eq, Curry._2(Bs_decoders__Decoders_bs.Decode.field, "joke", Bs_decoders__Decoders_bs.Decode.string), (function (joke) {
        return Curry._2(Bs_decoders__Decoders_bs.Decode.$great$great$eq, Curry._2(Bs_decoders__Decoders_bs.Decode.field, "id", Bs_decoders__Decoders_bs.Decode.string), (function (id) {
                      return Curry._2(Bs_decoders__Decoders_bs.Decode.$great$great$eq, Curry._2(Bs_decoders__Decoders_bs.Decode.field, "status", Bs_decoders__Decoders_bs.Decode.$$int), (function (status) {
                                    return Curry._1(Bs_decoders__Decoders_bs.Decode.succeed, {
                                                joke: joke,
                                                id: id,
                                                status: status
                                              });
                                  }));
                    }));
      }));

function handler($$event, _context, callback) {
  var jokeCount = Curry._2(Bs_decoders__Decoders_bs.Decode.decode_string, jokeCountDecoder, $$event.body);
  console.log("jokeCount", jokeCount);
  return fetch("https://icanhazdadjoke.com/", Curry._2(Fetch.RequestInit.make(/* Get */0, {
                              Accept: "application/json",
                              "User-Agent": "astro-reason (https://github.com/psb/astro-reason)"
                            }, undefined, undefined, undefined, undefined)(undefined, undefined, undefined, undefined, undefined), undefined, undefined)).then(function (prim) {
                  return prim.json();
                }).then(function (json) {
                console.log("json", json);
                var data = Curry._2(Bs_decoders__Decoders_bs.Decode.decode_value, jokeDecoder, json);
                var body;
                if (data.TAG === /* Ok */0) {
                  var d = data._0;
                  body = jokeCount.TAG === /* Ok */0 ? JSON.stringify({
                          joke: d.joke,
                          count: jokeCount._0.count + 1 | 0,
                          status: d.status
                        }) : JSON.stringify({
                          joke: d.joke,
                          count: Curry._1(Bs_decoders__Decoders_bs.Decode.string_of_error, jokeCount._0),
                          status: d.status
                        });
                } else {
                  var ed = data._0;
                  body = jokeCount.TAG === /* Ok */0 ? JSON.stringify({
                          joke: Curry._1(Bs_decoders__Decoders_bs.Decode.string_of_error, ed),
                          count: jokeCount._0.count,
                          status: 500
                        }) : JSON.stringify({
                          joke: Curry._1(Bs_decoders__Decoders_bs.Decode.string_of_error, ed),
                          count: Curry._1(Bs_decoders__Decoders_bs.Decode.string_of_error, jokeCount._0),
                          status: 500
                        });
                }
                return Promise.resolve(callback(undefined, {
                                statusCode: 200,
                                body: body
                              }, undefined));
              }).catch(function (err) {
              console.log("server Error Json", err);
              var tmp;
              tmp = jokeCount.TAG === /* Ok */0 ? String(jokeCount._0.count) : Curry._1(Bs_decoders__Decoders_bs.Decode.string_of_error, jokeCount._0);
              var body = JSON.stringify({
                    joke: err,
                    count: tmp,
                    status: 500
                  });
              return Promise.resolve(callback(undefined, {
                              statusCode: 500,
                              body: body
                            }, undefined));
            });
}

export {
  jokeCountDecoder ,
  jokeDecoder ,
  handler ,
}
/*  Not a pure module */
