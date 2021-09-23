import React from 'react';
import Logo from '../../img/100x100.png';
import LogoUsco from '../../img/logolargo.png';

const Panel = () => {
    return (
        <div>
            <div className="text-center">
                <img src={LogoUsco}></img>
            </div>
            <div className="barra"></div>
            <div className="marco">
                <div className="flexbox">
                    <div>
                        <img className="imgperfil" src={Logo}/>
                        <p className="text-center uppercase negrita">Joe Doe</p>
                        <p className="text-center">20211145789</p>
                        <p className="text-center uppercase negrita">Neiva - Ingenieria de Software</p>
                    </div>

                    <div className="lineah">
                        <div className="linea"></div>
                        <h1 className="text-center uppercase panel">Panel de control</h1>
                        <div className="flexbox dos-columnas">
                            <div className="item-panel">
                                <div className="cardround">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-friends" className="svg-inline--fa fa-user-friends fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#DFD4A6" d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"></path></svg>   
                                </div>
                            <p className="text-center">Grupo de investigacion</p>
                            </div> 
                            <div className="item-panel">
                                <div className="cardround">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chalkboard-teacher" className="svg-inline--fa fa-chalkboard-teacher fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#DFD4A6" d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"></path></svg>
                                </div>
                            <p className="text-center">Grupo de investigacion</p>
                            </div>
                            <div className="item-panel">
                                <div className="cardround">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" className="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#DFD4A6" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>                                </div>
                                <p className="text-center">Grupo de investigacion</p>
                            </div>
                            <div className="item-panel">
                                <div className="cardround">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comments" className="svg-inline--fa fa-comments fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#DFD4A6" d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"></path></svg>   
                                </div>
                                <p className="text-center">Grupo de investigacion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    );
}
 
export default Panel;
