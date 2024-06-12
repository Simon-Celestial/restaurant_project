import styles from "./CareersPage.module.scss";
import {Header} from "../../Components/Header/Header.tsx";
import React, {useCallback} from "react";
import {Footer} from "../../Components/Footer/Footer.tsx";
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, {AccordionProps} from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    border: `1px solid ${"white"}`,
    backgroundColor: '#26282D',
    color: '#FECD20',
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));
const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem',color:'#FECD20'}}/>}
        {...props}
    />
))(({theme}) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
    '& .css-ahj2mt-MuiTypography-root': {
        fontWeight: 'bold',
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(0),
    borderTop: '1px solid rgba(0, 0, 0, .125)'
}));


export const CareersPage = () => {
    const [expanded, setExpanded] = React.useState<string | false>('');

    const handleChange = useCallback(
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        }, [setExpanded]);

    return (
        <>
            <Header/>
            <main className={styles.careersMain}>
                <section className={styles.workSection}>
                    <div className={styles.sectionContent}>
                        <h1>Work for us</h1>
                        <p>Interested in joining the Gourmet team?</p>
                        <h3>We are always looking to hear from people who are passionate about making a difference.</h3>
                        <div className={styles.workImg}>
                            <img
                                src="https://t3.ftcdn.net/jpg/06/61/67/36/360_F_661673616_R3ObwTckvrQyU929fHPg4gJie1YaVqi2.jpg"
                                alt="Work"/>
                        </div>
                        <p>avaible positions</p>
                    </div>
                </section>
                <section className={styles.vacancySection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.vacancyContainer}>
                            <b>RESTAURANT MANAGER</b>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                    <Typography>JOB DESCRIPTION</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>LOCATION</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div className={styles.locationContainer}>
                                            Birmingham: reliably commute or plan to relocate before starting work
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                    <Typography>RATE OF PAY & HOURS</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <div className={styles.container}>
                                <Link to={"/"} className={`${styles.button} ${styles.blackBtn}`}>apply</Link>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};
