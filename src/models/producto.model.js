import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    codigo:{
        type:Number,
        required:true,
        trim: true,
        unique: true,
    },
    nombre:{
        type:String,
        required: true,
    },
    descuento:{
        type:Number,
        required:true,
    },
    fechaCreacion: {
        type: Date,
        default: Date.now, // Configurando para que se genere automáticamente al crear el proveedor
        required: true,
    },
    estatus: {
        type:Boolean,
        required:true,
        default:"true",
    },
    descripcion:{
        type:String,
        required:true
    },
    proveedor:{
        type:String,
        required:true,
    },
    fechaBaja:{
        type:Date,
    }
});

export default mongoose.model("Producto", productoSchema);