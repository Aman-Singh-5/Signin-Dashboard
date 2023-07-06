import React from 'react';
import { TbDashboard } from 'react-icons/tb';
import { TbBrandCampaignmonitor } from 'react-icons/tb';
import { TfiLayoutMediaCenter } from 'react-icons/tfi';
import { FcStatistics } from 'react-icons/fc';
import { MdPayment } from 'react-icons/md';
import { FiActivity } from 'react-icons/fi';
import { AiOutlineSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <>
                    <div className='col-2'>
                        <div className='Sidebar-box'>
                            <div className='upper-part'>
                            
                            <div className='upper-part-content d-flex'>
                            <TbDashboard/>
                            <Link to="/dashboard"><h5 id='dashboard'>Dashboard</h5></Link>
                            </div>
                            <div className='upper-part-content d-flex'>
                            <TbBrandCampaignmonitor/>
                            <Link to="/campain"><h5 id='campaings'>Campaings</h5></Link>
                            </div>
                            <div className='upper-part-content d-flex'>
                                <TfiLayoutMediaCenter/>
                            <a><h5>Media</h5></a>
                            </div>
                            <div className='upper-part-content d-flex'>
                                <FcStatistics/>
                            <a><h5>Statistic</h5></a>
                            </div>
                            <div className='upper-part-content d-flex'>
                                <MdPayment/>
                            <a><h5>Payments</h5></a>
                            </div>
                            
                        </div>
                        
                        <div className='middle-part'>
                        <div className='upper-part-content d-flex'>
                            <FiActivity/>
                            <a><h5>Activity-log</h5></a>
                            </div>
                            <div className='upper-part-content d-flex'>
                            <AiOutlineSetting/>
                            <a><h5>Settings</h5></a>
                            </div>
                        </div>
                        <hr/>
                        <div className='lower-part'>
                            <h5>Profile</h5>
                        </div>
                 </div>
                        
                    </div>
    </>
  );
};

export default Sidebar;
