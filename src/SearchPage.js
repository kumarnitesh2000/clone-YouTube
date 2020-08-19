import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
<TuneOutlinedIcon/>
<h2>Filters</h2>
</div>
<hr/>
<ChannelRow
image="https://www.flyploader.live/media/files/anmol_a7708Oz.jpg"
Channel="Nitesh Tech"
verified
subs="660k"
noOfVideos={382}
description="Join us For More Videos i am nitesh to help in you every condition because i am jobless"/>
        <hr />
        <VideoRow 
        title="Best Nitesh YouTube Videos Collection"
        views="2.3M Views"
        timestamp="3 days ago"
        channelImg="https://www.flyploader.live/media/files/anmol_a7708Oz.jpg"
        channel="Nitsh Tech"
        image="https://www.flyploader.live/media/files/anmol_a7708Oz.jpg"
        subs="610K"
        />
        </div>
    );
}

export default SearchPage;