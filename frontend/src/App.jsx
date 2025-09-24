import React from "react";
import DocentesList from "./components/DocenteList";
import CriteriosList from "./components/Criterios";

function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Evaluaciones</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Docentes</h2>
        <DocenteList />
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Criterios</h2>
        <Criterios />
      </section>
    </div>
  );
}

export default App;
