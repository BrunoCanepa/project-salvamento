import { Container, Typography, Box, Button, Modal, Card, CardActions } from "@mui/material";
import { useState } from "react";

export default function ViewScreen() {
  const producto = {
    id: 1,
    nombre: "Camiseta deportiva",
    descripcion:
      "Camiseta cómoda de algodón, ideal para entrenamientos o uso diario.",
    precio: 29.99,
    imagenes: [
      "/img/camiseta.png",
      "/img/gorra.png",
      "/img/zapatos.png",
    ],
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "30rem",
    height: "20rem",
    bgcolor: 'background.paper',
    border: '1px solid #D0D0D0',
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleCloseModal = () => setOpen(false); 
  const handleOpenModal = () => setOpen(true); 

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      {/* Galería de imágenes */}
      <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        justifyContent: "center",
        mb: 3,
      }}
    >
      {producto.imagenes.map((img, index) => (
        <Box
          key={index}
          component="img"
          src={img}
          alt={`${producto.nombre}-${index}`}
          sx={{
            maxWidth: 400,   // ancho máximo permitido
            height: "auto",  // mantiene proporción original
            borderRadius: 2,
            boxShadow: 2,
          }}
        />
      ))}
    </Box>


      {/* Información del producto */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          {producto.nombre}
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          {producto.descripcion}
        </Typography>
        <Typography variant="h4" color="primary" gutterBottom>
          ${producto.precio}
        </Typography>
      </Box>

      {/* Acciones */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Button variant="contained" color="primary">
          Editar
        </Button>
        <Button variant="outlined" color="error" onClick={handleOpenModal} >
          Eliminar
        </Button>
        <Modal open={open} onClose={handleCloseModal} >
            <Card sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Eliminar producto
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Estás seguro de que quieres eliminar este producto?
              </Typography>
              <CardActions sx={{ justifyContent: "center", height: "100%" }} >
                <Button color="success" variant="outlined" onClick={handleCloseModal} >Cancelar</Button>
                <Button color="error" variant="outlined" >Eliminar</Button>
              </CardActions>
            </Card>
          </Modal>
      </Box>
    </Container>
  );
}
