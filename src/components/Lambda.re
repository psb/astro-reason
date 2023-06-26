type joke = {
  joke: string,
  status: int,
  count: int,
};

type state = {
  data: joke,
  loading: bool,
};

type action =
  | Loaded(joke)
  | Loading;

let initialState = {
  data: {
    joke: "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
    status: 200,
    count: 0,
  },
  loading: false,
};

let decodeFetchResult = (json): joke =>
  Json.Decode.{
    joke: json |> field("joke", string),
    status: json |> field("status", int),
    count: json |> field("count", int),
  };

// let fetchJoke = (callback, currentCount) => {
//   Js.Promise.(
//     Fetch.fetch(".netlify/functions/joke")
//     |> then_(Fetch.Response.json)
//     |> then_(json => {
//          let data = decodeFetchResult(json);
//          callback(data);
//          resolve();
//        })
//     |> catch(err => {
//          let data = {joke: "", status: 0, count: currentCount};
//          Js.log2("Error", err);
//          callback(data);
//          resolve();
//        })
//     |> ignore
//   );
// };
let fetchJoke = (callback, currentCount) => {
  let payload = Js.Dict.empty();
  Js.Dict.set(payload, "count", Json.Encode.int(initialState.data.count));
  Js.Promise.(
    Fetch.fetchWithInit(
      ".netlify/functions/joke",
      Fetch.RequestInit.make(
        ~method_=Post,
        ~body=
          Fetch.BodyInit.make(Js.Json.stringify(Js.Json.object_(payload))),
        ~headers=Fetch.HeadersInit.make({"Content-Type": "application/json"}),
        (),
      ),
    )
    |> then_(Fetch.Response.json)
    |> then_(json => {
         let data = decodeFetchResult(json);
         callback(data);
         resolve();
       })
    |> catch(err => {
         let data = {joke: "", status: 0, count: currentCount};
         Js.log2("Error", err);
         callback(data);
         resolve();
       })
    |> ignore
  );
};

[@react.component]
let make = () => {
  let (state, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | Loading => {...state, loading: true}
        | Loaded(result) => {data: result, loading: false}
        },
      initialState,
    );

  let loadingImage = () => <img src="/laugh.svg" alt="laugh" />;

  let errorImage = () =>
    <img src="/500.jpg" alt="error dog" className="mx-auto" />;

  let joke = text =>
    <p className="p-6 mb-2 rounded-lg text-lg bg-yellow-400">
      {React.string(text)}
    </p>;

  let buttons = currentCount =>
    <div className="flex justify-around">
      <a
        className="rounded-md p-4 mt-2 bg-slate-400 text-white hover:bg-slate-500"
        href="/">
        {React.string("Home")}
      </a>
      <button
        className="rounded-md p-4 mt-2 bg-blue-500 text-white hover:bg-blue-600"
        onClick={_ => {
          dispatch(Loading);
          fetchJoke(data => dispatch(Loaded(data)), currentCount);
        }}>
        {React.string("Get another joke")}
      </button>
    </div>;

  <div className="container mx-auto max-w-md text-center p-4">
    {state.loading
       ? loadingImage()
       : <>
           {state.data.status != 200 ? errorImage() : joke(state.data.joke)}
           {buttons(state.data.count)}
         </>}
  </div>;
};
