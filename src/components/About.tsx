import arturo from '../images/arturo.jpg';
import { Icons } from './Icons';
import flatdesign from '../images/binary.png'

export const About = () => {
    const styleDiv = {
        
        backgroundImage: 'url(' + flatdesign + ')',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1000px'
    }

    return (
        <div className="container mt-3 p-5" style={styleDiv}>
            <div className="row">
                <div className="col-4 mt-5">
                    <img className="rounded-pill mt-5" src={arturo} alt="" width="300" />
                </div>
                <div className="col-6 mt-3 mb-5">
                    <h3 className="display-3 text-dark">Arturo Romero</h3>
                    <p className="text-dark text-justify">
                        Interesado en todo lo referente a tecnologías de la información. 
                        Poseo habilidades matemáticas y conocimiento en distintos sistemas 
                        operativos: Linux, Ubuntu, Windows, MacOS y lenguajes como: Python, 
                        PHP, JavaScript, etc. Soy un profesional proactivo, responsable, 
                        creativo y autodidacta con facilidad de adaptación y trabajo bajo presión.
                    </p>
                    <Icons />
                </div>
            </div>
        </div>
    )
}
