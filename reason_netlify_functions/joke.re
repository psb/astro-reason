[%%bs.raw "require('isomorphic-fetch')"];

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

let decodePostBody = (json_string): joke_count => {
  let jc = Json.parse(json_string);
  switch (jc) {
  | Some(json) => Json.Decode.{count: json |> field("count", int)}
  | None => {count: 0}
  };
};

let decodeFetchResult = (json): joke_result =>
  Json.Decode.{
    joke: json |> field("joke", string),
    id: json |> field("id", string),
    status: json |> field("status", int),
  };

let handler = (event, _context, callback) => {
  let jokeCount = decodePostBody(event.body);
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
         let data = decodeFetchResult(json);
         let body =
           Js.Json.stringify(
             Obj.magic({
               "joke": data.joke,
               "count": jokeCount.count + 1,
               "status": data.status,
             }),
           );
         resolve(callback(. None, {statusCode: 200, body}, ()));
       })
    |> catch(err => {
         Js.log2("server Error Json", err);
         let body =
           Js.Json.stringify(
             Obj.magic({
               "joke": err,
               "count": jokeCount.count,
               "status": 500,
             }),
           );
         resolve(callback(. None, {statusCode: 500, body}, ()));
       })
  );
};
