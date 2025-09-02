import { TextField, Button, Container, Typography, Box, IconButton, Select, MenuItem, InputLabel, FormControl, RadioGroup, Radio, FormControlLabel, FormLabel } from '@mui/material';
import { useState } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { use } from 'react';

export default function AddScreen() {
    const [images, setImages] = useState([]);
    const [publishedOn, setPublishedOn] = useState([]);

    const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files.map(file => URL.createObjectURL(file)));
  };

  const handlePublishedOnChange = (event) => {
    const {
      target: { value },
    } = event;
    setPublishedOn(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    console.log(publishedOn);
  };

  return (
    <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'row', gap: 2, mt: 4, marginBottom: "2rem", justifyContent: "center" }} >
      <Box sx={{  width:"60%" }} >
      <a href='/..' >MainScreen</a>
      <Typography variant="h5" gutterBottom>
        Agregar Producto
      </Typography>

      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField
          label="Nombre del producto"
          variant="outlined"
          fullWidth
        />

        <TextField
          label="Descripción"
          variant="outlined"
          multiline
          rows={3}
          fullWidth
        />

        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }} >
          <TextField
          label="Precio"
          variant="outlined"
          type="number"
          fullWidth
          />

          <FormControl sx={{ width:"20%" }} >
            <InputLabel  >Moneda</InputLabel>
            <Select
              label="Moneda"
              /*onChange={handleChange}*/
            >
              <MenuItem value={"dolares"}>Dólares</MenuItem>
              <MenuItem value={"pesos"}>Pesos</MenuItem>
            </Select>
          </FormControl> 
        </Box >

        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }} >
          <TextField
          label="Stock"
          variant="outlined"
          type="number"
          fullWidth
          />

          <FormControl sx={{ width:"20%" }} >
            <InputLabel  >Unidad</InputLabel>
            <Select
              label="Moneda"
              /*onChange={handleMonedaChange(value)}*/
            >
              <MenuItem value={"unidad"}>Unidades</MenuItem>
              <MenuItem value={"metroCuadrado"}>m²</MenuItem>
            </Select>
          </FormControl>
        </Box >
        
        <FormControl>
          <InputLabel id="publishedOn" >Publicado en...</InputLabel>
          <Select
              labelId='publishedOn'
              multiple
              value={publishedOn}
              onChange={handlePublishedOnChange}
            >
              <MenuItem value={"marketPlace"}>Market Place</MenuItem>
              <MenuItem value={"instagram"}>Instagram</MenuItem>
              <MenuItem value={"mercadoLibre"}>Mercado Libre</MenuItem>
          </Select>
        </FormControl>

        <Button variant="outlined" color="red">
          Guardar Producto
        </Button>
      </Box>
      </Box>
      <Box>
        <IconButton component="label" sx={{ height:"10rem", width:"10rem", border: "1px solid #D0D0D0", borderRadius: 1  }} >
            <AddPhotoAlternateIcon sx={{ height:"50%", width:"50%" }} />
            <input type="file" hidden multiple accept="image/png, image/jpeg" onChange={handleFileChange} />
          </IconButton >

          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`preview-${i}`} width={100} height={100} />
          ))}
        </div>
      </Box>
    </Container>
  );
}
/*<IconButton component="label">
          <AddPhotoAlternateIcon/>
          <input type="file" hidden multiple accept="image/png, image/jpeg" onChange={handleFileChange} />
        </IconButton >

        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {images.map((src, i) => (
          <img key={i} src={src} alt={`preview-${i}`} width={100} height={100} />
        ))}
      </div>*/

    /*id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    currency: {
      type: DataTypes.STRING,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    unit: {
      type: DataTypes.STRING,
    },
    publishedon: {
      type: DataTypes.STRING,
    },

    <FormControl>
          <FormLabel color='black' > Tipo de Precio </FormLabel>
            <RadioGroup row >
              <FormControlLabel value={"unidad"} control={<Radio color='' />} label="Precio por unidad" />
              <FormControlLabel value={"m2"} control={<Radio color='' />} label="Precio por m²" />
              <FormControlLabel value={"lote"} control={<Radio color='' />} label="Precio por lote" />
            </RadioGroup>
        </FormControl>*/