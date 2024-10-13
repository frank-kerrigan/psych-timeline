import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import '../../node_modules/react-vertical-timeline-component/style.min.css';
import '../../src/VerticalTimeline.css'
import '../../src/VerticalTimelineElement.css'
import React from 'react';
import { FaBrain } from "react-icons/fa";
import { GiBrain } from 'react-icons/gi';
import { DateLabel } from "./DateLabel";




export const Timeline = () => {
    return (

        <div style={{ backgroundColor: 'lightgray' }}>

            <h1 style={{ textAlign: "center" }}>Historical Psychology Timeline</h1>
            <h2 style={{ textAlign: "center" }}>
                This text is aligned center by adding inline css
            </h2>



            <VerticalTimeline>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}//white
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}//blue

                    date={<DateLabel text="1888" />}

                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}//blue 
                    icon={<FaBrain />}
                >

                    <h3 className="vertical-timeline-element-title">Willhelm Wundt Father of Modern Psychology</h3>
                    <h4 className="vertical-timeline-element-subtitle">Created the 1st Laboratory for Experimental Psychology in Leipzig, Germany</h4>
                    <p>Structualism - European - Using Introspection: Examined the structure of the mind and by breaking it down to its basic elements (feelings, emotions, thoughts, etc.)<br></br>
                        Focussed on Human Emotions, Cognition & Human Behaviours.<br></br>
                        Was responsible for the training of thousands of students through his lectures and laboratories enabling hundreds to gain degrees in Psychology.
                        <br></br>
                        <a href="https://en.wikipedia.org/wiki/Wilhelm_Wundt/" target='_blank'> Willhelm Wundt </a>
                        <br></br><a href="https://en.wikipedia.org/wiki/Structuralism_(psychology)"> Structualism </a>
                        <br></br>
                        <a href="/Document1" > Open Big Doc1 </a>

                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}//blue box
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}//white arrow

                    date=" 1883"

                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<GiBrain />}
                >
                    <h3 className="vertical-timeline-element-title">William James, Functionalism, USA </h3>
                    <h4 className="vertical-timeline-element-subtitle">Focused on individual differences, influenced by Darwin </h4>
                    <p>
                        Did not believe that consciousness could be studied by breaking it down into smaller parts.<br></br>
                        Believed mental processes evolved to help individuals adapt.<br></br>
                        Influenced the study of Behaviourism, Applied Psychology as well has having a huge influence in Educational Psychology & the education system<br></br>
                        Huge influence in psychology in USA, influenced development of behaviourism and applied psychology in USA.
                        <a href="https://en.wikipedia.org/wiki/Functional_psychology"> Functionalism </a>
                        <a href="/Document2" > Open Big Doc2 </a>
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}//white
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}//blue
                    date="1885"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaBrain />}
                >
                    <h3 className="vertical-timeline-element-title">Ebbinghaus</h3>
                    <h4 className="vertical-timeline-element-subtitle">He pioneered experimental methods which set the basis for memory research</h4>
                    <p>
                        Made significant advancements in the study of memory.<br></br>
                        His experimental methods differed from Wundt’s as they more controlled and systematic.
                        <br></br>He focused on the empirical data which was a contrast with Wundt’s introspective methods.<br></br>
                        <a href="https://en.wikipedia.org/wiki/Hermann_Ebbinghaus">Ebbinghaus</a>
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
                    date="2008 - 2010"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaBrain />}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}//white
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}//blue
                    date="2006 - 2008"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaBrain />}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
                    date="April 2013"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FaBrain />}
                >
                    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                    <p>
                        Strategy, Social Media
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}//white
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}//blue
                    date="November 2012"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FaBrain />}
                >
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FaBrain />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                        Creative Direction, Visual Design
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<FaBrain />}
                />
            </VerticalTimeline>

        </div>

    )
};

