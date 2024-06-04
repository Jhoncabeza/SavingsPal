// App.js
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Router from "./router/router";

function App() {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
