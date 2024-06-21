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
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import jobsData from "/public/data/JobsData/jobsData.json";
import {Job, JobDetail} from "../../../types.ts";
import {Bounce, toast} from "react-toastify";

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    border: `1px solid ${"gray"}`,
    backgroundColor: '#26282D',
    color: '#FECD20'
}));
const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem', color: '#FECD20'}}/>}
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
        (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        }, [setExpanded]);


    const handleAlert = useCallback(() => {
        toast.error(`We apologise, this job is not available now`, {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });

    }, [])
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
                        {jobsData?.map((job: Job) => (
                            <div key={job?.id} className={styles.vacancyContainer}>
                                <b>{job?.title}</b>
                                {job?.details.map((detail: JobDetail, idx) => (
                                    <Accordion
                                        key={idx}
                                        expanded={expanded === `panel${job?.id}-${idx}`}
                                        onChange={handleChange(`panel${job?.id}-${idx}`)}
                                    >
                                        <AccordionSummary aria-controls={`panel${job.id}-${idx}d-content`}
                                                          id={`panel${job.id}-${idx}d-header`}>
                                            <Typography>{detail?.header}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <div className={styles.infoContainer}
                                                     dangerouslySetInnerHTML={{__html: detail?.content}}/>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                                <div className={styles.container}>
                                    <Link to={"#"} className={`${styles.button} ${styles.blackBtn}`}
                                          onClick={handleAlert}>apply</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};
