import React from 'react'
import Item from '../WorkoutItem/Item'
import './WorkoutList.css'

const WorkoutList = () => (
    <nav className="WorkoutList">
        <Item workout="bench" weight="60" details="3 sets of 8" />
        <Item workout="deadlift" weight="90" details="2 sets of 4" />
        <Item workout="squats" weight="120" details="3 sets of 8" />
    </nav>
)

export default WorkoutList