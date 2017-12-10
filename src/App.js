import React, { Component } from 'react';
import logo from './logo.svg';
import imageMain from './images/IMG_0133.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div id='page-wrap'>
        <header className='headertogether'>
                <nav>
                    <h4 className='headeritem1'>RESUME</h4>
                    <div className='headeritem2'>
                       
                        <ul>
                            <li> <a className='linkable_nonbutton' href='#about'>About</a> </li>
                      
                            <li> <a className='linkable_nonbutton' href='#skills'>Skills</a></li>
                      
                       
                            <li> <a className='linkable_nonbutton' href='#experience'>Experience</a> </li>
                       
                     
                            <li> <a className='linkable_nonbutton' href='#contact'>Contact</a> </li>
                        </ul>
                        
                    </div> 
                </nav>
            
            <div className='headersection2'>
                <section className='namepart'>
                    <h2>Mengdi Liu</h2>
                    <h4>QA Analyst</h4>
                    <button>DOWNLOAD RESUME</button>
                </section>
         
                <div className='picturepart'>
                    <img src={imageMain} width='260'/>
                </div>
            </div>
        </header>
        
        
    
            <section className='skillsall'>
                <h1 id='skills'>Skills</h1>
                
                <div className="skill-list-item">
                    <p className='skillnamepart'>Creativity</p>
                    <div className='meterpart'><meter className='meteritem' min='0' max='10' value='9'></meter> <span className='percentage'>90%</span></div>
                </div>
                
                <div className="skill-list-item">
                    <p className='skillnamepart'>Logical Thinking</p>
                    <div className='meterpart'><meter className='meteritem' min='0' max='10' value='7'></meter> <span className='percentage'>70%</span></div>
                </div>
            
            
                <div className="skill-list-item">
                    <p className='skillnamepart'>Collaborate</p>
                    <div className='meterpart'><meter className='meteritem' min='0' max='10' value='8'></meter> <span className='percentage'>80%</span></div>
                </div>    
                    
                <div className="skill-list-item">
                    <p className='skillnamepart'>Management</p>
                   <div className='meterpart'><meter className='meteritem' min='0' max='10' value='7'></meter> <span className='percentage'>70%</span></div>
                </div>
            
                <div className="skill-list-item">
                    <p className='skillnamepart'>Coding</p>
                   <div className='meterpart'><meter className='meteritem' min='0' max='10' value='5'></meter> <span className='percentage'>50%</span></div>
                </div>
                
            </section>
    
        <div>
            <section id='about'>
                <h1>About</h1>
                <div className='aboutsecondpart'>
                    <div className='perme'>
                        <img className='picrotate' src='./images/risktaker.png' width='100%'/>
                        <div>I AM A RISK TAKER. ALSO I LOVE...</div>
                    </div>
                    
                    <div className='perme'>
                        <img className='picrotate' src='./images/swimming%20copy.png' width='100%'/>
                        <div>SWIMMING</div>
                    </div>
                    
                    <div className='perme'>
                        <img className='picrotate' src='./images/piano.png' width='100%'/>
                        <div>MAKING MUSIC</div>
                    </div>
                    
                    <div className='perme'>
                        <img className='picrotate' src='./images/photograph.png' width='100%'/>
                        <div>TRAVELLING AND PHOTOGRAPHING</div>
                    </div> 
                </div>
            </section>
        </div>
        
        <div>
            <section className='experience'>
                <h1 id='experience'>Experience</h1>
                
                <div>
                    <div className='perjob'>
                        <div className='leftcolumn'>
                            <p>2017.09-current</p>
                            <div className='location'>
                                <p>Morneau Shepell</p>
                                <p>Toronto</p>
                            </div>
                        </div>
                        
                        <div className='rightcolumn'>
                            <p>Quality Assurance Analyst</p>
                            <div className='listoftasks'>
                                <ul id='listoftasks'>
                                <li>Executed testing relating to Benefits EAP system in Morneau Shepell</li>
                                <li>Performed UI testing, Benefits and Events testing, portal and backoffice data verification and validation testing based off specification and clients requirements, with the help of using database and SQL query.</li>
                                <li>Collaborated with teams on various projects using HP Application Lifecycle Management (ALM) system for testing</li>
                                <li>Possess thorough attitude in testing by applying specifications and requirements from clients</li>
                                <li>Advanced previous skills in running SQL query</li>
                                <li>Delivered daily status reports and testing progress to team lead, monthly work updates with description and time distribution using spreadsheet for the project manager and the company</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className='perjob'>
                        <div className='leftcolumn'>
                            <p>2017.07 – 2017.08</p>
                            <div className='location'>
                                <p>TooManyHats</p>
                                <p>Toronto</p>
                            </div>
                        </div>
                        
                        <div className='rightcolumn'>
                            <p>Project Manager Assistance and Quality Assurance</p>
                             <div className='listoftasks'>
                                <ul id='listoftasks'>
                                <li>TooManyHats is a small software consulting company that uses an agile workflow</li>
                                <li>Tools used: Github, Zenhub, Slack (office communications)</li>
                                <li>Responsible for the day to day operations of the team. Liaison with our developers, confirmed completion of assigned tasks, and provided briefing reports to the CTO</li>
                                <li>Quality assurance - using Github, was able to run developers code in order to review that it met the specification and then approve payment for tasks completed</li>
                                <li>Executed quality assurance plan, using detailed testing plan</li>
                                <li>Business planning skill- used lean canvas to build business metrics and ideation in the inception of the company</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className='perjob'>
                        <div className='leftcolumn'>
                            <p>2017.06 - 2017.07</p>
                            <div className='location'>
                                <p>SmartStudy</p>
                                <p>Toronto</p>
                            </div>
                        </div>
                        
                        <div className='rightcolumn'>
                            <p>Personal Tutor Manager</p>
                             <div className='listoftasks'>
                                <ul id='listoftasks'>
                                <li>Using SQL query to manage database</li>
                                <li>Learn fast about the OA, SP systems within the company</li>
                                <li>Lesson planning and problem solving by using a client-centered approach - engaging students in various learning activities</li>
                                <li>Communicating well with people of different power relationships-being authentic, caring and understanding to the people I work with</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
        <div>
            <section className='footer'>
                
                <div className='footerleft'>
                    <h1 id='contact'>Contact</h1> 
                    
                    <div className='undercontact'>
                        <h2>Mengdi Liu</h2>
                
                        <h4>QA Analyst</h4>
                    
                        <button type='download'> Download Resume</button>
                    </div>
                </div>
                
                <div className='footerright'>
                
                    <div>
                        <a href='mailto:liumengdi923@gmail.com'>Email: liumengdi923@gmail.com</a>
                    </div>
                
                    <div> 
                        <a href='tel:6474046710'>Tel: 647-404-6710</a>
                    </div>
                
                    <div>
                        <a href='https://www.linkedin.com/feed/?trk=' target='_blank'>Linkedin Profile</a>
                    </div>
                </div>
            
            </section>
        </div>
    </div>
      </div>
      
    );
  }
}

export default App;
