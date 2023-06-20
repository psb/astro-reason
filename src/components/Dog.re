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

  let decodeFetchResult = (json): api_result =>
    Json.Decode.{
      message: json |> field("message", string),
      status: json |> field("status", string),
    };

  let fetchImage = () => {
    Js.Promise.(
      Fetch.fetch("https://dog.ceo/api/breeds/image/random")
      |> then_(Fetch.Response.json)
      |> then_(json => {
           let data = decodeFetchResult(json);
           dispatch(Loaded(data));
           resolve();
         })
      |> catch(err => {
           let data = {message: "", status: "error"};
           Js.log2("Failure!!", err);
           dispatch(Loaded(data));
           resolve();
         })
      |> ignore
    );
  };

  let dogImage = (~data: api_result) =>
    <div>
      <img
        src={data.status != "success" ? "/500.jpg" : data.message}
        alt="dog"
      />
      <button
        onClick={_ => {
          dispatch(Loading);
          fetchImage();
        }}>
        {React.string("Fetch another image")}
      </button>
    </div>;

  <div className="">
    {state.loading ? loadingImage() : dogImage(~data=state.data)}
  </div>;
};