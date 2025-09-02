import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { useState } from "react";

export default function EditScreen() {
  // Producto de ejemplo (valores iniciales)
  const producto = {
    nombre: "Camiseta deportiva",
    descripcion: "Camiseta cómoda de algodón, ideal para entrenamientos o uso diario.",
    precio: 29.99,
    images: ["/img/camiseta.png", "/img/gorra.png" ],
  };
  const [images, setImages] = useState(producto.images);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files.map(file => URL.createObjectURL(file)).concat(images));
  }

  return (
    <Container sx={{ mt: 4, width:"80%" }}>
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
          Agregar imagen
          <input type="file" hidden accept="image/png, image/jpeg" multiple onChange={handleFileChange} />
        </Button>

        <Box sx={{ textAlign: "center" }}>
          {images.map( image =>
          <div>
                <img
              src={image}
              alt="imagen"
              width="150"
              style={{ borderRadius: "8px", marginTop: "10px" }}
            />
            <button>x</button>
          </div>
           )}
          
        </Box>

        <Button variant="contained" color="primary">
          Guardar cambios
        </Button>
      </Box>
    </Container>
  );
}
