const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para manejar solicitudes JSON
app.use(express.json());

// Rutas para autenticación y alimentos
const authRoutes = require('./routes/authRoutes');
const foodRoutes = require('./routes/foodRoutes');
app.use('/api/auth', authRoutes);
app.use('/api/foods', foodRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
