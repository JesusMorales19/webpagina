import mongoose from "mongoose";

const proveedorShema = new mongoose.Schema({
    idProveedor: {
        type: Number,
        length: 8,
        required: true,
        trim: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    empresa: {
        type: String,
        required: true,
    },
    telefono: {
        type: Number,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
    fechaCreacion: {
        type: Date,
        default: Date.now, // Configurando para que se genere automáticamente al crear el proveedor
        required: true,
    },
    status:{
        type:Boolean,
        required:true,
        default:"true",
    },
    bajaFecha:{
        type:Date,
    }
});

export default mongoose.model("Proveedor", proveedorShema);
