import { Container, Typography, TextField, Button, Box } from "@mui/material";

export default function EditScreen() {
  // Producto de ejemplo (valores iniciales)
  const producto = {
    nombre: "Camiseta deportiva",
    descripcion: "Camiseta cómoda de algodón, ideal para entrenamientos o uso diario.",
    precio: 29.99,
    imagen: "/img/camiseta.png",
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Editar producto
      </Typography>

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 2,
        }}
      >
        <TextField
          label="Nombre del producto"
          defaultValue={producto.nombre}
          fullWidth
        />
        <TextField
          label="Descripción"
          defaultValue={producto.descripcion}
          multiline
          rows={4}
          fullWidth
        />
        <TextField
          label="Precio"
          type="number"
          defaultValue={producto.precio}
          fullWidth
        />
        <Button variant="outlined" component="label">
          Cambiar imagen
          <input type="file" hidden />
        </Button>

        <Box sx={{ textAlign: "center" }}>
          <img
            src={producto.imagen}
            alt="Producto"
            width="150"
            style={{ borderRadius: "8px", marginTop: "10px" }}
          />
        </Box>

        <Button variant="contained" color="primary">
          Guardar cambios
        </Button>
      </Box>
    </Container>
  );
}
