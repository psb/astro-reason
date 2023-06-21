type api_result = {
  message: string,
  status: string,
};

type state = {
  data: api_result,
  loading: bool,
};

type action =
  | Loaded(api_result)
  | Loading;

let initialState = {
  data: {
    message: "https://images.dog.ceo/breeds/rottweiler/n02106550_10478.jpg",
    status: "success",
  },
  loading: false,
};
let decodeFetchResult = (json): api_result =>
  Json.Decode.{
    message: json |> field("message", string),
    status: json |> field("status", string),
  };

let fetchImage = callback => {
  Js.Promise.(
    Fetch.fetch("https://dog.ceo/api/breeds/image/random")
    |> then_(Fetch.Response.json)
    |> then_(json => {
         let data = decodeFetchResult(json);
         callback(data);
         resolve();
       })
    |> catch(err => {
         let data = {message: "", status: "error"};
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

  let loadingImage = () => <img src="/dog.svg" alt="dog" />;

  let dogImage = (~data: api_result) =>
    <img
      src={data.status != "success" ? "/500.jpg" : data.message}
      alt="dog"
      className="mx-auto"
    />;

  <div className="container mx-auto max-w-md text-center p-4">
    {state.loading
       ? loadingImage()
       : <>
           {dogImage(~data=state.data)}
           <button
             className="rounded-md p-4 mt-2 bg-green-500 text-white hover:bg-green-600"
             onClick={_ => {
               dispatch(Loading);
               fetchImage(data => dispatch(Loaded(data)));
             }}>
             {React.string("Fetch another image")}
           </button>
         </>}
  </div>;
};