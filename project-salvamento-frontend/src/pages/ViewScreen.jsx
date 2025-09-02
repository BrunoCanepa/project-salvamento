import { Container, Typography, Box, Button, Card, CardMedia, CardContent, CardActions, Modal } from "@mui/material";
import { useState } from "react";

export default function ViewScreen() {
  // Producto de ejemplo
  const producto = {
    id: 1,
    nombre: "Camiseta deportiva",
    descripcion: "Camiseta cómoda de algodón, ideal para entrenamientos o uso diario.",
    precio: 250,
    imagen: "/img/camiseta.png",
    moneda: "UYU",
    stock: 12,
    unidad: "m²",
    publicadoEn: "Instagram",
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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card>
        <CardMedia
          component="img"
          height="250"
          image={producto.imagen}
          alt={producto.nombre}
          sx={{ objectFit: "cover" }}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {producto.nombre}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {producto.descripcion}
          </Typography>
          <Typography variant="h6" >
            Precio: ${producto.precio} {producto.moneda}
          </Typography>
          <Typography variant="h6" >
            Stock: {producto.stock} {producto.unidad}
          </Typography>
          <Typography variant="h6" >
            Publicado en: {producto.publicadoEn}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="outlined" color="primary"> Editar </Button>
          <Button variant="outlined" color="error" onClick={handleOpen} > Eliminar </Button>
          <Modal open={open} onClose={handleClose} >
            <Card sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Eliminar producto
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Estás seguro de que quieres eliminar este producto?
              </Typography>
              <CardActions sx={{ justifyContent: "center", height: "100%" }} >
                <Button color="success" variant="outlined" onClick={handleClose} >Cancelar</Button>
                <Button color="error" variant="outlined" >Eliminar</Button>
              </CardActions>
            </Card>
          </Modal>
        </CardActions>
      </Card>

    </Container>
  );
}
