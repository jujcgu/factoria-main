import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../img/logocorto2.png';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const NuevaPub = () => {

 

   	
    return (
        <div className="container">
            <div className="fondo2 text-center">
                <img className="logo" src={Logo}/>
                <div className="flexbox-end">
                <Link to={'/'} className="btn-regresar">
                &#60; Regresar
                </Link>
                </div>
                
                <div className="barra">
                    <h2 className="text-head">Crear Publicación</h2>
                </div>
                <div className="container-text">
                    <div className="input-group">
                        <div className="titulo block">
                            <label className="label">Titulo</label>
                            <input
                            type="text"
                            className="input-pub"
                            placeholder="Especifica titulo de publicacion"
                            />
                        </div>
                        <div className="categoria block">
                            <label className="label">Categoria</label>
                            <select className="input-pub" name="select">
                            <option>Seleccionar categoria</option>
                            <option>Seleccionar categoria</option>
                            <option>Seleccionar categoria</option>
                            </select>
                        </div>
                        <div className="descripcion block">
                            <label className="label">Descripcion</label>
                            <textarea name="textarea"  cols="27" className="input-pub" placeholder="Descripcion de la publicacion">
                            
                            </textarea>
                        </div>
                        <div className="privacidad block">
                            <label className="label">Privacidad</label>
                            <select className="input-pub" name="select">
                            <option>Quien puede ver tu publicacion</option>
                            <option>Seleccionar categoria</option>
                            <option>Seleccionar categoria</option>
                            </select>
                        </div>
                    </div>
                </div>
                

                <hr className="linea-h"/>
                
                <div class="editor container-text">
                    <div className="text-left">
                        <h3>Contenido</h3>
                        <p>Informacion detallada de la publicacion</p>
                    </div>
                    <div className="container-text">
                        <CKEditor
                            editor={ClassicEditor}
                        />
                    </div>
                    
                    <div className="image-container">
                        <div>
                            <h3>Imagen</h3>
                        </div>
                        <div className="contenedor-imagen">
                            <div><button className="button-img">Subir</button></div>
                            <div className="div-img"></div>
                        </div>
                    </div>

                </div>

                <div className="tags container-text">
                    <div class="label">
                        <label className="label">Tags de la publicacion</label>
                        <input
                        type="text"
                        className="input"
                        placeholder="Palabras claves de tu publicacion"
                        />
                    </div>
                </div>

                <div className="flexbox container-text flexbox-end">
                    <button className="button-login">Guardar borrador</button>
                    <button className="button">Publicar</button>
                </div>
                
            </div>

            
        </div>
    );
}
 
export default NuevaPub;