import { Container, Typography, Box, Button, Card, CardMedia, CardContent, CardActions } from "@mui/material";

export default function ViewScreen() {
  // Producto de ejemplo
  const producto = {
    id: 1,
    nombre: "Camiseta deportiva",
    descripcion: "Camiseta cómoda de algodón, ideal para entrenamientos o uso diario.",
    precio: 29.99,
    imagen: "/img/camiseta.png",
  };

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
          <Typography variant="h6" color="primary">
            ${producto.precio}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained" color="primary">
            Editar
          </Button>
          <Button variant="outlined" color="error">
            Eliminar
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
