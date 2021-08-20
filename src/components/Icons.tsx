import { SiPhp } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiWordpress } from 'react-icons/si';
import { SiJquery } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiAngular } from 'react-icons/si';
import { SiFlask } from 'react-icons/si';
import { SiDjango } from 'react-icons/si';
import { SiLaravel } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { SiPostgresql } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';

export const Icons = () => {
    const styleIcons = {
        fontSize: 50,
        color: 'black'
    }

    const stylePython = {
        fontSize: 30,
        color: 'black'
    }
    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col text-center">
                    <SiPhp style={styleIcons} />
                    <h6 className="text-dark">PHP</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiPython style={stylePython} />
                    <h6 className="text-dark">Python</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiJavascript style={stylePython} />
                    <h6 className="text-dark">JavaScript</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiHtml5 style={stylePython} />
                    <h6 className="text-dark">HTML5</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiCss3 style={stylePython} />
                    <h6 className="text-dark">CSS</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiWordpress style={stylePython} />
                    <h6 className="text-dark">Wordpress</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiJquery style={stylePython} />
                    <h6 className="text-dark">jQuery</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiBootstrap style={stylePython} />
                    <h6 className="text-dark">Bootstrap</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiLaravel style={stylePython} />
                    <h6 className="text-dark">Laravel</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiReact style={stylePython} />
                    <h6 className="text-dark">React</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiAngular style={stylePython} />
                    <h6 className="text-dark">Angular</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiFlask style={stylePython} />
                    <h6 className="text-dark">Flask</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiDjango style={stylePython} />
                    <h6 className="text-dark">Django</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiGithub style={stylePython} />
                    <h6 className="text-dark">Github</h6>
                </div>
                <div className="col text-center mt-3">
                    <GrMysql style={stylePython} />
                    <h6 className="text-dark">Mysql</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiPostgresql style={stylePython} />
                    <h6 className="text-dark">Postgresql</h6>
                </div>
                <div className="col text-center mt-3">
                    <SiMongodb style={stylePython} />
                    <h6 className="text-dark">Mongodb</h6>
                </div>
            </div>
        </div>
    )
}
