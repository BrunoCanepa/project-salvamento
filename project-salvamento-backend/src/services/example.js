const { or } = require('sequelize');
const { ClientModel, ContactModel } = require('../associations');

async function createClient(data) {
  try {
    const { name, rut, companyname, details, adress } = data;

    const newClient = await ClientModel.create({
      name, rut, companyname, details, adress
    });

    return newClient;
  } catch (error) {
    throw error;
  }
}

async function updateClient(clientId, data) {
  try {
    const client = await ClientModel.findByPk(clientId);

    if (!client) {
      throw new Error('Cliente no encontrado');
    }
    const updatedClient = await client.update(data);

    return updatedClient;
  } catch (error) {
    throw new Error('Error al actualizar el cliente con id ' + clientId);
  }
}

async function getByIdClient(clientId) {
  try {
    const getClient = await ClientModel.findByPk(clientId);

    return getClient;
  } catch (error) {
    throw new Error('Error al obtener el cliente con id ' + clientId + ' desde la base de datos');
  }
}

async function getAllClients() {
  try {
    const allClients = await ClientModel.findAll({
      order: [['name', 'ASC']], 
    });
    return allClients;
  } catch (error) {
    console.error('Error en getAllClients:', error);
    throw new Error('Error al obtener todos los clientes desde la base de datos');
  }
}

async function getContactByClient(clientId) {
  const client = await ClientModel.findByPk(clientId, {
    include: {
      model: ContactModel,
    },
  });

  if (client) {
    const contacts = client ? client.Contacts : [];
    return contacts;
  }

  return null;
}


module.exports = {
  createClient,
  updateClient,
  getByIdClient,
  getAllClients,
  getContactByClient
};