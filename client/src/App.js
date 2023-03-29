import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";
import HandleDelete from "./components/Temp";
import CreateUserForm from "./components/form";

function App() {
  return (
    <>
      <div class="min-h-full">
        <header class="bg-white shadow-sm">
          <div class="mx-auto max-w-full py-6 px-8 sm:px-12 lg:px-12">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">
              {" "}
              Dashboard{" "}
            </h1>{" "}
          </div>{" "}
        </header>{" "}
        <main>
          <div class="mx-auto max-w-full py-6 sm:px-12 lg:px-12">
            <CreateUserForm />
            <Table />
            <HandleDelete />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
