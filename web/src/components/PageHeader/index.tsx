import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
//ICONES
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return (
        <div>
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar" />
                    </Link>

                    <img src={logoImg} alt="Logo da Proffy" />
                </div>

                <div className="header-content">
                    <strong>{props.title}</strong>
                    { props.description && <p>{props.description}</p>}
                
                    {props.children}
                </div>

            

            </header>
        </div>
    )
}

export default PageHeader;