import React from 'react'
import { Link } from 'react-router-dom'
import teamImg from '../assets/img/team-06.png'
import bgImg from '../assets/img/line-2.png'
import teamData from '../data/teamData'
import '../assets/css/team.css'
import PageTitles from '../components/PageTitles'
import { useMode } from '../context/ModeContext'
const Team = () => {
    const [mode, toggleMode] = useMode();
    return (
        <div>
            <PageTitles />
            <section className='team'>
                <div className='container'>
                    <h6><span>Team Members
                    </span></h6>
                    <h3>Our Amazing Team <br /> Members
                    </h3>
                    <div className='row justify-content-center'>
                        {teamData.map((item, index) => (
                            <div key={index} className='col-xl-3 col-md-6'>
                                <div className='team-card'>
                                    <div className='image'>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className='team-txt'>
                                        <h5 className='mt-4'>{item.title}</h5>
                                        <p>{item.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team