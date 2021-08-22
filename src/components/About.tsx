import arturo from '../images/arturo_new.png';
import { Icons } from './Icons';
import flatdesign from '../images/binary.png'

export const About = () => {
    const styleDiv = {
        
        backgroundImage: 'url(' + flatdesign + ')',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '900px'
    }

    const styleDivImage = {
        marginLeft: '-100px',
        marginTop: '100px'
    }

    return (
        <div id="divAbout" className="container mt-3 p-5" style={styleDiv}>
            <div id="divRow" className="row">
                <div id="divAuthor" style={styleDivImage} className="col-6">
                    <img id="imageAuthor" className="rounded-pill mt-5" src={arturo} alt="" width="600" />
                </div>
                <div id="divContent" className="col-6 mt-3 mb-5">
                    <h3 className="textMobile display-3 text-dark titleMobile">Sobre mi</h3>
                    <p className="textMobile text-dark text-justify">
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
