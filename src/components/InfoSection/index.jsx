import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router';
import "./style.css";

function InfoSection({ infoSectionData }) {
    const [hover, setHover] = useState(false);
    const handleHoverBtn = () => {
        setHover(!hover);
    }
const history = useHistory()
    const isMobileSmall = useMediaQuery({ query: '(max-width: 768px)' });

    const renderInfoSection = infoSectionData.map((item, index) => {
        const divStyleContainer = {
            background: (item.lightBg) ? "#f9f9f9" : "#010606"
        };
        const divStyleInfoRow = (!isMobileSmall) ? {
            gridTemplateAreas: (item.imgStart) ? `"col2 col1"` : `"col1 col2"`
        } : { gridTemplateAreas: (item.imgStart) ? `"col1""col2"` : `"col1 col1""col2 col2"` };
        const divStyleHeading = {
            color: (item.lightText) ? "#f7f8fa" : "#010606"
        };
        const divStyleSubtitle = {
            color: (item.darkText) ? "#010606" : "#fff"
        };
        const divStyleButton = {
            color: (item.dark) ? "#fff" : "#010606",
            background: (item.primary) ? "#010606" : "#01bf71"
        };
        const divStyleHover = {
            background: (item.primary) ? "#01bf71" : "#fff"
        }

        return (
            <div className={(item.clas)?"classImgID":"info-container"} style={divStyleContainer} key={index} id={item.id} name={item.id}>
                <div className="info-wrapper">
                    <div className="info-row" style={divStyleInfoRow}>
                        <div className="info-colunm1">
                            <div className="info-tetx-wrapper">
                                <p className="info-top-line">{item.topLine}</p>
                                <h1 className="info-heading" style={divStyleHeading}>{item.headLine}</h1>
                                <p className="info-subtitle" style={divStyleSubtitle}>{item.desscription}</p>
                                <div className="info-btn-wrapper">
                                    <button className="info-btn" onClick={()=>history.push("/signin")} style={(!hover) ? divStyleButton : divStyleHover} onMouseEnter={handleHoverBtn} onMouseLeave={handleHoverBtn}>{item.buttonLabel}</button>
                                </div>
                            </div>
                        </div>
                        <div className="info-colunm2">
                            <div className="info-img-wrapper">
                                <img src={item.img.default} alt={item.alt} className="info-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>
            {renderInfoSection}
        </>
    );
}

export default InfoSection;