//import react router dom
import { Routes, Route } from "react-router-dom";

//import view homepage
// import Home from '../views/home.jsx';

//import view posts index
import EventIndex from '../views/event/Calender/calender.jsx';

//import view post create
// import PostCreate from '../views/forums/create.jsx';

//import view post edit
// import PostEdit from '../views/posts/edit.jsx';

function RoutesIndex() {
    return (
        <Routes>

            {/* route "/" */}
            {/* <Route path="/" element={<Home />} /> */}

            {/* route "/posts" */}
            <Route path="/events" element={<EventIndex/>} />

            {/* route "/posts/create" */}
            {/* <Route path="/posts/create" element={<PostCreate />} /> */}

            {/* route "/posts/edit/:id" */}
            {/* <Route path="/posts/edit/:id" element={<PostEdit />} /> */}

        </Routes>
    )
}

export default RoutesIndex