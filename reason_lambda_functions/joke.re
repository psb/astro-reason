[%%bs.raw "require('isomorphic-fetch')"];

module D = Bs_decoders.Decoders_bs.Decode;

type event = {
  .
  "path": string,
  "httpMethod": string,
  "headers": Js.Dict.t(string),
  "queryStringParameters": Js.Dict.t(string),
  "body": Js.Json.t,
  "isBase64Encoded": bool,
};

type context = unit;

type response = {
  statusCode: int,
  body: string,
};

type joke_count = {count: int};

type joke_result = {
  joke: string,
  id: string,
  status: int,
};

let jokeCountDecoder: D.decoder(joke_count) =
  D.(field("count", int) >>= (count => succeed({count: count})));

// let decodeFetchResult = (json): joke_result =>
//   Json.Decode.{
//     joke: json |> field("joke", string),
//     id: json |> field("id", string),
//     status: json |> field("status", int),
//   };
let jokeDecoder: D.decoder(joke_result) =
  D.(
    field("joke", string)
    >>= (
      joke =>
        field("id", string)
        >>= (
          id =>
            field("status", int) >>= (status => succeed({joke, id, status}))
        )
    )
  );

let handler = (event, _context, callback) => {
  let jokeCount = D.decode_string(jokeCountDecoder, event.body);
  Js.log2("jokeCount", jokeCount);
  Js.Promise.(
    Fetch.fetchWithInit(
      "https://icanhazdadjoke.com/",
      Fetch.RequestInit.make(
        ~method_=Get,
        ~headers=
          Fetch.HeadersInit.make({
            "Accept": "application/json",
            "User-Agent": "astro-reason (https://github.com/psb/astro-reason)",
          }),
        (),
      ),
    )
    |> then_(Fetch.Response.json)
    |> then_(json => {
         Js.log2("json", json);
         let data = D.decode_value(jokeDecoder, json);
         let body = {
           switch (data, jokeCount) {
           | (Ok(d), Ok(jc)) =>
             Js.Json.stringify(
               Obj.magic({
                 "joke": d.joke,
                 "count": jc.count + 1,
                 "status": d.status,
               }),
             )
           | (Ok(d), Error(ejc)) =>
             Js.Json.stringify(
               Obj.magic({
                 "joke": d.joke,
                 "count": D.string_of_error(ejc),
                 "status": d.status,
               }),
             )
           | (Error(ed), Ok(jc)) =>
             Js.Json.stringify(
               Obj.magic({
                 "joke": D.string_of_error(ed),
                 "count": jc.count,
                 "status": 500,
               }),
             )
           | (Error(ed), Error(ejc)) =>
             Js.Json.stringify(
               Obj.magic({
                 "joke": D.string_of_error(ed),
                 "count": D.string_of_error(ejc),
                 "status": 500,
               }),
             )
           };
         };
         resolve(callback(. None, {statusCode: 200, body}, ()));
       })
    |> catch(err => {
         Js.log2("server Error Json", err);
         let body =
           Js.Json.stringify(
             Obj.magic({
               "joke": err,
               "count":
                 switch (jokeCount) {
                 | Ok(jc) => string_of_int(jc.count)
                 | Error(ejc) => D.string_of_error(ejc)
                 },
               "status": 500,
             }),
           );
         resolve(callback(. None, {statusCode: 500, body}, ()));
       })
  );
};
