import { useFetch } from "../hooks/useFetch";

const CriteriosList = () => {
    const { data: criterios, loading, error } = useFetch("http://localhost:3000/api/criterios");

    if (loading) return <p className="text-gray-500">Cargando criterios...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <ul className="space-y-2">
            {criterios.map(c => (
                <li key={c.id_criterio} className="p-3 border rounded hover:bg-gray-50">
                    <h3 className="font-semibold">{c.nombre_criterio}</h3>
                    <p className="text-gray-600">{c.descripcion}</p>
                    <span className="text-sm text-gray-400">Peso: {c.peso}</span>
                </li>
            ))}
        </ul>
    );
};

export default CriteriosList;
