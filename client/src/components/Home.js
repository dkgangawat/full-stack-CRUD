import React from "react";
import CreateUserForm from "./form";
import Table from "./Table";
const Home = () => {
  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow-sm">
          <div className="mx-auto max-w-full py-6 px-8 sm:px-12 lg:px-12">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-full py-6 sm:px-12 lg:px-12">
            <CreateUserForm />
            <Table />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
