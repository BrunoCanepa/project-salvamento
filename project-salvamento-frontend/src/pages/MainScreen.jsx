
import { useState } from 'react';
import { TextField, List, ListItem, ListItemAvatar, ListItemText, Avatar, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AddIcon from '@mui/icons-material/Add';

const productosMock = [
  { id: 1, nombre: 'Camiseta', imagen: '/img/camiseta.png' },
  { id: 2, nombre: 'Zapatos', imagen: '/img/zapatos.png' },
  { id: 3, nombre: 'Gorra', imagen: '/img/gorra.png' },
];

export default function MainScreen() {
  const [search, setSearch] = useState('');

  const productosFiltrados = productosMock.filter(p =>
    p.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: "flex", flexDirection: "column" }} >  
      <div style={{ padding: '2rem', width: '60%', margin: '0 auto' }}>
        <div style={{ display: "flex", flexDirection: "row" }} >     
          <TextField
            fullWidth
            sx={{ height:"4rem" }}
            label="Buscar producto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <a href='/add' >
            <IconButton edge="end" aria-label="edit" sx={{ height:"3.5rem", width:"3.5rem", border: "1px solid #D0D0D0", borderRadius: 1, marginLeft:"1rem" }} >
              <AddIcon />
            </IconButton>
          </a>
        </div>
        <List>
          {productosFiltrados.map(producto => (
            <ListItem sx={{ height: '80px' }} key={producto.id} secondaryAction={
              <div>
                <a href='/view' >
                <IconButton edge="end" aria-label="view">
                  <RemoveRedEyeIcon />
                </IconButton>
                </a>
                <a href='/edit' >
                  <IconButton edge="end" aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </a>
              </div>
            }>
              <ListItemAvatar>
                <Avatar variant='square' sx={{ height: "70px", width: "70px", marginRight: "10px" }} src={producto.imagen} alt={producto.nombre} />
              </ListItemAvatar>
              <ListItemText primary={producto.nombre} />
            </ListItem>
          ))}
        </List>
      </div>
      
    </div>
  );
}
