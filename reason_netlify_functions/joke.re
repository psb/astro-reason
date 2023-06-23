// exports.handler = async function (event, context) {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ message: "Hello World" }),
//   };
// };

type event = {
  .
  "path": string,
  "httpMethod": string,
  "headers": Js.Dict.t(string),
  "queryStringParameters": Js.Dict.t(string),
  "body": Js.Json.t,
  "isBase64Encoded": bool,
};

type response = {
  // .
  // "isBase64Encoded": bool,
  statusCode: int,
  // headers: Js.Dict.t(string),
  body: string,
};

type context = unit;
// type complete;

// type callback = (option(Js.Exn.t), response) => complete;

// type handler = (event, context, callback) => complete;

let handler = (_event, _context, callback) => {
  // callback->respondWithObject({"message": "Hello world!"});
  callback(.
    Js.null,
    {
      statusCode: 200,
      // headers: Js.Dict.fromList([("Content-Type", "application/json")]),
      // Json.Encode.object_([
      //   ("Content-Type", Json.Encode.string("application/json")),
      // ])
      body:
        // Json.Encode.object_([
        //   ("message", Json.Encode.string("Hello World")),
        // ])
        // |> Json.stringify,
        Js.Json.stringify(Obj.magic({"message": "Hello World"})),
    },
  );
};
