// Controlador para manejar las solicitudes relacionadas con los alimentos
exports.searchFood = async (req, res) => {
    const { searchInput } = req.body;

    try {
        // Aquí iría el código para enviar la consulta a la API de IA (por ejemplo, Edamam)
        // y devolver los resultados
        const results = {}; // Simulado

        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al buscar alimentos.' });
    }
};
