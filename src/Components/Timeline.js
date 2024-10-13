import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import '../../node_modules/react-vertical-timeline-component/style.min.css';
import '../../src/VerticalTimeline.css'
import '../../src/VerticalTimelineElement.css'
import React from 'react';
import { FaBrain, FaGrimace } from "react-icons/fa";
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
                    className="vertical-timeline-element--left"                 
                    date={<DateLabel text="Early Foundations" />}
                    
                    iconStyle={{ background: 'rgb(140, 179, 217)', color: '#fff' }}//blue bg White Icon 
                    icon={<FaBrain />}
                >
                  
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--left"
                    contentStyle={{ background: 'rgb(140, 179, 217)', color: '#000' }}//white
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}//blue

                    date={<DateLabel text="1879 " />}
                    
                    iconStyle={{ background:  'rgb(255, 255, 255)', color: '#8cb3d9' }}// White bg blue Icon 
                    icon={<FaBrain />}
                >

                    <h3 className="vertical-timeline-element-title">Willhelm Wundt Father of Modern Psychology<br></br>Created the first laboratory for Experimental Psychology in Leipzig, Germany </h3>
                    <h4 className="vertical-timeline-element-subtitle"> 
                       Founded <b>Structualism</b> with Edward.B Titchener, Europe </h4>
                    <p>Using <b>Introspection:</b> Examined the structure of the mind by breaking it down to its basic elements of feelings, emotions, thoughts, etc. - 
                    <b>Reductionist</b><br></br>
                        Focussed on Human Emotions, Cognition & Human Behaviours.<br></br>
                        Was responsible for the training of thousands of students through his lectures and laboratories enabling hundreds to gain degrees in Psychology.
                        <br></br>
                        Influenced <b><i>Experimental Psychology, Psychoanalysis - Freud</i></b> <br></br>
                        Opposition to Structuralim resulted in the <b>Functionalist</b> Movement by William James in the USA
                        <br></br><a href="https://en.wikipedia.org/wiki/Wilhelm_Wundt/" target='_blank'> Willhelm Wundt </a>
                        <br></br><a href="https://www.simplypsychology.org/structuralism.html#Titcheners-Structuralism" target='_blank'> Structualism and Titchener </a>
                        <br></br>
                        <a href="/Wundt" > Willhelm Wundt Doc </a>

                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--right"
                    contentStyle={{ background: 'rgb(140, 179, 217)', color: '#000' }}//white
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}//blue

                    date={<DateLabel text="1890-1927 " />}
                    
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#8cb3d9' }}//White bg blue Icon 
                    icon={<FaBrain />}
                >

                    <h3 className="vertical-timeline-element-title">Edward.B Titchener<br></br></h3>
                    <h4 className="vertical-timeline-element-subtitle"> 
                       Founded <b>Structualism</b> with Willhelm Wundt</h4>
                    <p>Using <b>Introspection:</b> Expanded on Wundt's system of Structualism.
                    <br></br>
                        Focussed on Human Emotions, Cognition & Human Behaviours.<br></br>
                        Was responsible for the training of thousands of students through his lectures and laboratories enabling hundreds to gain degrees in Psychology.
                        <br></br>
                        Influenced <b><i>Experimental Psychology, Psychoanalysis - Freud</i></b> <br></br>
                        Opposition to Structuralim resulted in the <b>Functionalist</b> Movement by William James in the USA
                        <br></br><a href="https://www.britannica.com/biography/Edward-B-Titchener" target='_blank'> Edward B. Titchener </a>
                        <br></br><a href="https://www.simplypsychology.org/structuralism.html#Titcheners-Structuralism" target='_blank'> Structualism and Titchener </a>
                        <br></br>
                        <a href="/Wundt" > Willhelm Wundt Doc </a>

                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--left"
                    contentStyle={{ background: 'rgb(140, 179, 217)', color: '#000' }}//blue box
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}//white arrow

                    date={<DateLabel text="1890" />}

                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#8cb3d9' }}//white bg blue Icon
                    icon={<FaBrain />}
                >
                    <h3 className="vertical-timeline-element-title">William James, Functionalism, USA </h3>
                    <h4 className="vertical-timeline-element-subtitle">Focused on individual differences, influenced by Darwin </h4>
                    <p>
                        Disagreed with <b>Structualism</b>. Did not believe that consciousness could be studied by breaking it down into smaller parts.<br></br>
                        Believed mental processes evolved to help individuals adapt, influenced by Darwin's Theory of Evolution and that certain behaviours 
                        were the same as <b>Instincts</b> - Shiver, Sneeze, Suckling, Migration, Hibernation etc. 
                        <br></br>Influenced the study of <b><i>Behaviourism, Applied Psychology, Cognitive Approach, Educational Psychology & Evolutionary Psychology.</i></b> 
                        <br></br><a href="https://en.wikipedia.org/wiki/Functional_psychology" target='_blank'> Functionalism </a>
                        <br></br><a href="/James" > William James Doc </a><br></br>
                        <a href="/Functionalism" > Functionalism Doc </a>
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--right"
                    contentStyle={{ background: 'rgb(140, 179, 217)', color: '#000' }}//white
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}//blue

                    date={<DateLabel text="1898 " />}
                    
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#8cb3d9' }}//White bg blue Icon 
                    icon={<FaBrain />}
                >

                    <h3 className="vertical-timeline-element-title">Edward Thorndike</h3>
                    <h4 className="vertical-timeline-element-subtitle"> 
                       Developed the <b>'Law of Effect'</b> </h4>
                    <p>Founder of <b><i>Educational Psychology</i></b> 
                    <br></br>Best known for his experiments involving cats learning to escape from boxes.
                        <br></br>
                        
                        <br></br>
                        Influenced <b><i>Behaviourist Psychology, especially B.F. Skinner's theory of Operant Conditioning</i></b> <br></br>
                        
                        <br></br><a href="https://www.britannica.com/biography/Edward-B-Titchener" target='_blank'> Edward B. Titchener </a>
                        <br></br><a href="https://www.simplypsychology.org/structuralism.html#Titcheners-Structuralism" target='_blank'> Structualism and Titchener </a>
                        <br></br>
                        <a href="/Wundt" > Willhelm Wundt Doc </a>

                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                   
                    className="vertical-timeline-element--right"
                    date={<DateLabel text="PsychoAnalytic School" />}
                    
                    iconStyle={{ background: 'rgb(204, 204, 255)', color: '#fff' }}//lilac bg White Icon 
                    icon={<FaBrain />}
                >
                  
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--right"
                    contentStyle={{ background: 'rgb(204, 204, 255)', color: '#000' }}//lilac
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}//white
                    date={<DateLabel text="1885 - 1939" />}
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#ccccff' }}// white bg lilsc icon
                    icon={<FaBrain />}
                    
                >
                    <h3 className="vertical-timeline-element-title">Sigmund Freud, PsychoAnalysis </h3>
                    <h4 className="vertical-timeline-element-subtitle">Focussed on the Unconscious Mind, Dreams, </h4>
                    <p>
                        Published theory on 'Interpretation of Dreams' <br></br>
                        Had a huge influence in the development of Human Behaviour and the Psyche.<br></br>
                        <a href="https://www.simplypsychology.org/sigmund-freud.html" target='_blank'>Freud</a>


                    </p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                    className="vertical-timeline-element--left"
                    contentStyle={{ background: 'rgb(204, 204, 255)', color: '#000' }}//lilac
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}//white
                    date={<DateLabel text="1921-1933" />}
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#ccccff' }}// white bg lilsc icon
                    icon={<FaBrain />}
                    
                >
                    <h3 className="vertical-timeline-element-title">Carl Jung, Analytic Psychology </h3>
                    <h4 className="vertical-timeline-element-subtitle">Based on Individual psyche, Collective Consciousness & Psychological Complexes </h4>
                    <p>
                        Published theory on 'Interpretation of Dreams' <br></br>
                        Had a huge influence in the development of Human Behaviour and the Psyche.<br></br>
                        <a href="https://www.verywellmind.com/what-are-jungs-4-major-archetypes-2795439" target='_blank'>Jung</a>


                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--right"
                    contentStyle={{ background: 'rgb(204, 204, 255)', color: '#000' }}//lilac
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}//white
                    date={<DateLabel text="1885 - 1939" />}
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#ccccff' }}// white bg lilsc icon
                    icon={<FaBrain />}
                >
                    <h3 className="vertical-timeline-element-title">Karen Horney, PsychoAnalysis </h3>
                    <h4 className="vertical-timeline-element-subtitle">Focussed on the Unconscious Mind, Dreams, </h4>
                    <p>
                        Published theory on 'Interpretation of Dreams' <br></br>
                        Had a huge influence in the development of Human Behaviour and the Psyche.<br></br>
                        <a href="https://www.simplypsychology.org/sigmund-freud.html" target='_blank'>Freud</a>


                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
              
                    className="vertical-timeline-element--left"
                    date={<DateLabel text="Behaviourist School" />}
                    
                    iconStyle={{ background: 'rgb(179, 255, 204)', color: '#fff' }}//green bg White Icon 
                    icon={<FaBrain />}
                >
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                    className="vertical-timeline-element--left"
                    contentStyle={{ background: 'rgb(179, 255, 204)', color: '#000' }}//green 
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}//white
                    date={<DateLabel text="1891-1902" />}
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#b3ffcc' }}// white bg green icon
                    icon={<FaBrain />}
                >
                    <h3 className="vertical-timeline-element-title">Ivan Pavlov </h3>
                    <h4 className="vertical-timeline-element-subtitle">Publishes finding on Classical Conditioning (Pavlov's Dogs)</h4>
                    <p>
                       Had a huge influence in the development of Human Behaviour and the Psyche.<br></br>
                        <a href="https://practicalpie.com/ivan-pavlov-biography-experiments/" target='_blank'>Pavlov</a>


                    </p>
                </VerticalTimelineElement>

                    <VerticalTimelineElement
                    className="vertical-timeline-element--right"
                    contentStyle={{ background: 'rgb(179, 255, 204)', color: '#000' }}//green 
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}//white
                    date={<DateLabel text="1913" />}
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#b3ffcc' }}// white bg green icon
                    icon={<FaBrain />}
                >
                    <h3 className="vertical-timeline-element-title">John B. Watson </h3>
                    <h4 className="vertical-timeline-element-subtitle">Publishes seminal work: "Psychology as the Behaviorist Views it" </h4>
                    <p>
                        <br></br>
                        <a href="https://www.simplypsychology.org/sigmund-freud.html" target='_blank'>Freud</a>


                    </p>
                </VerticalTimelineElement>

                
                    <VerticalTimelineElement
                    className="vertical-timeline-element--left"
                    contentStyle={{ background: 'rgb(179, 255, 204)', color: '#000' }}//green 
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}//white
                    date={<DateLabel text="1920" />}
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#b3ffcc' }}// white bg green icon
                    icon={<FaBrain />}
                >
                    <h3 className="vertical-timeline-element-title">John B. Watson & Rosalie Rayner</h3>
                    <h4 className="vertical-timeline-element-subtitle">Publish work on Classical Conditioning of fear</h4>
                    <p>Specifically the study of "Little Albert"
                        <br></br>
                        Had a huge influence in the development of Human Behaviour and the Psyche.<br></br>
                        <a href="https://practicalpie.com/little-albert-experiment/" target='_blank'>Little Albert</a>


                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--right"
                    contentStyle={{ background: 'rgb(179, 255, 204)', color: '#000' }}//green 
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}//white
                    date={<DateLabel text="1927" />}
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#b3ffcc' }}// white bg green icon
                    icon={<FaBrain />}
                >
                    <h3 className="vertical-timeline-element-title">B.F Skinner </h3>
                    <h4 className="vertical-timeline-element-subtitle">Radical Behaviourism. <br></br> Developed is the father of Operant Conditioning </h4>
                    <p>
                        <br></br>
                        <a href="https://www.simplypsychology.org/sigmund-freud.html" target='_blank'>Freud</a>


                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
                    date={<DateLabel text="1888" />}
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
                    date={<DateLabel text="1888" />}
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
                    date={<DateLabel text="1888" />}
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

