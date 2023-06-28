// exports.handler = async function (event, context) {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ message: "Hello World" }),
//   };
// };
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
  // .
  // "isBase64Encoded": bool,
  statusCode: int,
  // headers: Js.Dict.t(string),
  body: string,
};

type joke_count = {count: int};

type joke_result = {
  joke: string,
  id: string,
  status: int,
};

// type t;

// type callback = (option(Js.Exn.t), response) => t;

// type handler = (event, context, callback) => t;

let decodePostBody = (json_string): joke_count => {
  let jc = Json.parse(json_string);
  switch (jc) {
  | Some(json) => Json.Decode.{count: json |> field("count", int)}
  | None => {count: 0}
  };
};

// let decodeFetchResult = (json): joke_result =>
//   Json.Decode.{
//     joke: json |> field("joke", string),
//     id: json |> field("id", string),
//     status: json |> field("status", int),
//   };

let fetchJoke = () =>
  Js.Promise.(
    Fetch.fetchWithInit(
      "https://icanhazdadjoke.com/",
      Fetch.RequestInit.make(
        ~method_=Get,
        ~headers=Fetch.HeadersInit.make({"Content-Type": "application/json"}),
        (),
      ),
    )
    |> then_(Fetch.Response.json)
    |> then_(json => {
         Js.log2("Server Json", json);

         //  json |> decodeFetchResult |> (joke => Some(joke) |> resolve)
         resolve(Ok(json));
       })
    |> catch(err => {
         Js.log2("server Error Json", err);
         resolve(Error(err));
       })
  );

let handler = (event, _context, callback) => {
  let jokeCount = decodePostBody(event.body);
  Js.log2("jc", jokeCount);

  let _ =
    fetchJoke()
    |> Js.Promise.then_(res => {
         switch (res) {
         | Ok(data) =>
           //  let json = decodeFetchResult(data);
           Js.log2("Data", data);

           let body =
             Js.Json.stringify(
               Obj.magic(
                 {
                   //  "joke": json.joke,
                   //  "count": jokeCount.count + 1,
                   //  "status": json.status,
                   data;
                 },
               ),
             );
           callback(. None, {statusCode: 200, body}, ());
         | Error(err) =>
           let body =
             Js.Json.stringify(
               Obj.magic(
                 {
                   //  "joke": err,
                   //  "count": jokeCount.count,
                   //  "status": 500,
                   err;
                 },
               ),
             );
           callback(. None, {statusCode: 500, body}, ());
           ();
         };
         Js.Promise.resolve();
       });
  ();
  // ();
  // callback(.
  //   None,
  //   {
  //     statusCode: 200,
  //     // headers: Js.Dict.fromList([("Content-Type", "application/json")]),
  //     // Json.Encode.object_([
  //     //   ("Content-Type", Json.Encode.string("application/json")),
  //     // ])
  //     body:
  //       // Json.Encode.object_([
  //       //   ("message", Json.Encode.string("Hello World")),
  //       // ])
  //       // |> Json.stringify,
  //       Js.Json.stringify(
  //         Obj.magic({
  //           "joke": newJoke.joke,
  //           "count": jokeCount.count + 1,
  //           "status": 200,
  //         }),
  //       ),
  //   },
  // );
};
