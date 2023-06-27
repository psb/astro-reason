// export default function handler(request, response) {
//   response.status(200).json({
//     body: request.body,
//     query: request.query,
//     cookies: request.cookies,
//   });
// }
[%raw "require('isomorphic-fetch')"];

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
// type complete;

// type callback = (option(Js.Exn.t), response) => complete;

// type handler = (event, context, callback) => complete;

// let decodePostBody = (json_string): joke_count => {
//   let jc = Json.parse(json_string);
//   switch (jc) {
//   | Some(json) => Json.Decode.{count: json |> field("count", int)}
//   | None => {count: 0}
//   };
// };

// let decodeFetchResult = (json): joke_result =>
//   Json.Decode.{
//     joke: json |> field("joke", string),
//     id: json |> field("id", string),
//     status: json |> field("status", int),
//   };

let fetchJoke = () =>
  Js.Promise.(
    Fetch.fetch("https://icanhazdadjoke.com/")
    |> then_(Fetch.Response.json)
    |> then_(json => {
         //  json |> decodeFetchResult |> (joke => Some(joke) |> resolve)
         resolve(
           Ok(json),
         )
       })
    |> catch(err => {resolve(Error(err))})
  );

let handler = (request, _response) => {
  Js.log2(
    "Request",
    request,
    // let jokeCount = decodePostBody(event.body);
    // let _ =
    //   fetchJoke()
    //   |> Js.Promise.then_(res => {
    //        switch (res) {
    //        | Ok(data) =>
    //         //  let json = decodeFetchResult(data);
    //          let body =
    //            Js.Json.stringify(
    //              Obj.magic({
    //                "joke": json.joke,
    //                "count": jokeCount.count + 1,
    //                "status": json.status,
    //              }),
    //            );
    //          callback(. None, {statusCode: json.status, body}, ());
    //        | Error(err) =>
    //          let body =
    //            Js.Json.stringify(
    //              Obj.magic({
    //                "joke": err,
    //                "count": jokeCount.count,
    //                "status": 500,
    //              }),
    //            );
    //          callback(. None, {statusCode: 500, body}, ());
    //          ();
    //        };
    //        Js.Promise.resolve();
    //      });
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
  );
};
