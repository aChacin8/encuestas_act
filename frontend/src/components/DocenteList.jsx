import { useFetch } from "../hooks/useFetch";

const DocentesList = () => {
    const { data: docentes, loading, error } = useFetch("http://localhost:3000/api/docentes");

    if (loading) return <p className="text-gray-500">Cargando docentes...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {docentes.map(doc => (
                <div key={doc.id_docente} className="p-4 bg-white shadow rounded">
                    <h2 className="text-xl font-bold">{doc.nombre_docente} {doc.apellido_docente}</h2>
                    <p className="text-gray-600">{doc.email}</p>
                    <p className="text-gray-500">{doc.departamento}</p>
                </div>
            ))}
        </div>
    );
};

export default DocentesList;
