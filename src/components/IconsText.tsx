import { Lottie } from '@crello/react-lottie'
import codeData from '../images/codeanimation.json';
import designData from '../images/webdesigneranimation.json';
import serverData from '../images/server.json';

export const IconsText = () => {
    const styleText = {
        color: 'black',
        
    }

    return (
        <div className="container mb-5">
            <div className="row mt-5 iconsDesign">
                <div className="col text-center">
                    <div>
                        <Lottie config={{
                            animationData: codeData,
                            loop: false,
                            renderer: 'svg'
                        }}></Lottie>
                    </div>
                    <h4 className="titleIcons display-6" style={styleText}>Creo proyectos desde 0</h4>
                </div>
                <div className="col text-center mx-5 iconsDesign">
                    <div>
                        <Lottie config={{
                            animationData: designData,
                            loop: false,
                            renderer: 'svg'
                        }}></Lottie>
                    </div>
                    <h4 className="titleIcons display-6" style={styleText}>Diseños a medida</h4>
                </div>
                <div className="col text-center iconsDesign">
                    <div>
                        <Lottie config={{
                            animationData: serverData,
                            loop: false,
                            renderer: 'svg'
                        }}></Lottie>
                    </div>
                    <h4 className="titleIcons display-6" style={styleText}>Hosting, bases de datos y más.</h4>
                </div>
            </div>
        </div>
    )
}
